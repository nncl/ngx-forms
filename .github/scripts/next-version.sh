#!/usr/bin/env bash
# Computes the next release version from Conventional Commits since the last semver tag.
# Usage: next-version.sh [auto|patch|minor|major] [fallback-version]
# Prints "<last> <next> <bump>"; bump is "none" when there is nothing to release.
set -euo pipefail

FORCE="${1:-auto}"
FALLBACK="${2:-0.0.0}"

LAST=$(git describe --tags --abbrev=0 --match '[0-9]*.[0-9]*.[0-9]*' 2>/dev/null || true)
if [ -n "$LAST" ]; then
  RANGE="$LAST..HEAD"
else
  LAST="$FALLBACK"
  RANGE="HEAD"
fi

BUMP=none
if [ "$FORCE" != "auto" ]; then
  BUMP="$FORCE"
else
  LOG=$(git log "$RANGE" --format='%s%n%b')
  if grep -qE '^BREAKING[ -]CHANGE:|^[a-z]+(\([^)]*\))?!:' <<<"$LOG"; then
    BUMP=major
  elif grep -qE '^feat(\([^)]*\))?:' <<<"$LOG"; then
    BUMP=minor
  elif grep -qE '^(fix|perf)(\([^)]*\))?:' <<<"$LOG"; then
    BUMP=patch
  fi
fi

IFS=. read -r MAJOR MINOR PATCH <<<"${LAST%%-*}"
case "$BUMP" in
  major) NEXT="$((MAJOR + 1)).0.0" ;;
  minor) NEXT="$MAJOR.$((MINOR + 1)).0" ;;
  patch) NEXT="$MAJOR.$MINOR.$((PATCH + 1))" ;;
  none)  NEXT="$LAST" ;;
  *) echo "Invalid release type: $BUMP" >&2; exit 1 ;;
esac

echo "$LAST $NEXT $BUMP"
