#!/bin/bash
cd /scraper
while true
  do
    node index.js 2>&1 | tee -a ./log.txt
    sleep 30
 done
