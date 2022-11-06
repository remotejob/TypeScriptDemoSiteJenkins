git fetch --all --tags
export LASTMESSAGE=`git log -1 --format=%s`
echo $LASTMESSAGE
RES=$(git show-ref --tags)
if [ -z "$RES" ]; then
    NEW_TAG=v0.0.0
else
    # NEW_TAG=$(git describe --tags --abbrev=0 | awk -F. '{OFS="."; $NF+=1; print $0}')
    NEW_TAG=$(git describe --tags `git rev-list --tags --max-count=1` | awk -F. '{OFS="."; $NF+=1; print $0}')
fi
echo $NEW_TAG
git tag -a $NEW_TAG -m "$LASTMESSAGE" && git push origin --tags