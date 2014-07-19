Beaconator
==========

A source of 'randomNIST'
------------------------

This tool is based off the National Institute of Standards and Technology Randomness Beacon project that produces one of the most random 512 bit numbers every minute. If you would like to view that project, here is a link to the home page: http://beacon.nist.gov

Authors
-------

Chris Celi - http://www.github.com/celic

Andrew Rempe - http://www.github.com/arempe93

How It Works
------------

This is a single web page with JavaScript. Our web server deploys a cronjob every minute to pull the latest random number from http://beacon.nist.gov and stores the value on our server for quick access. This reduces the delay on the user because the NIST website can be rather slow. (It is a prototype still afterall) Then upon 'Beaconize' we take the number of options and modulo it against the 512 bit random number to come up with an answer. 

Contact Us
----------

If you would like to contribute to this project or have any questions about its purpose or the meaning of life in general, ask Andrew 'cause hell if I want to deal with you.
