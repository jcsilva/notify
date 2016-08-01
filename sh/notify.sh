#!/bin/sh

while [[ $# > 1 ]]
do
  key="$1"

  case $key in
      -r|--register)
      KEY="$2"
      shift
      ;;
      -t|--text)
      TEXT="$2"
      shift
      ;;
      *)
      ;;
  esac

  shift
done

if [ -n "${KEY}" ]
then
  # Save token to ~/.notifyreg
  echo "${KEY}" > ~/.notifyreg
else
  KEY=`cat ~/.notifyreg`
  curl -X POST \
  -H "X-Parse-Application-Id: T5rfG0KnZ2t7RCm1EcqKstuPqrt0RmfAz3Upcq9a" \
  -H "X-Parse-REST-API-Key: 69uI6UnhZyyvEmFGxKVy5wPlhDNRFCM0QQEtui6Y" \
  -H "Content-Type: application/json" \
  -d "{\"key\":\"${KEY}\", \"text\": \"${TEXT}\"}" \
  https://parseapi.back4app.com/functions/notify \
  > /dev/null

  echo "[notify] Successfully sent notification."
fi
