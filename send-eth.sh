#!/bin/bash

curl \
  -H 'Content-Type:application/json' \
  -X POST \
  --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{
    "from": "0xe8816898d851d5b61b7f950627d04d794c07ca37",
    "to": "0x44c3eae70fbaf6e3fff81f099bc84d6c7c2dc402",
    "gas": "0x5208",
    "gasPrice": "0x77359400",
    "value": "0x9184e72a000"
  }],"id":67}' \
  http://localhost:8501/ 