#!/bin/bash
set -e

echo "Entry point script running"

CONFIG_FILE=_config.yml
JEKYLL_CMD="bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling"

/bin/bash -c "exec $JEKYLL_CMD"&

while true; do

  inotifywait -q -e modify,move,create,delete $CONFIG_FILE

  if [ $? -eq 0 ]; then

    echo "Change detected to $CONFIG_FILE, restarting Jekyll"

    jekyll_pid=$(pgrep -f jekyll)
    if [ -n "$jekyll_pid" ]; then
      kill -KILL $jekyll_pid
    fi

    /bin/bash -c "exec $JEKYLL_CMD"&

  fi

done
