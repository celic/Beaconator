Beaconator
==========

A source of 'randomNIST'
------------------------

This tool implements the National Institute of Standards and Technology Randomness Beacon project. The Randomness Beacon produces one of the most random numbers in 512 bit hex format every minute. More information on this project can be found [on the home page](http://beacon.nist.gov)

Authors
-------

Chris Celi - http://www.github.com/celic

Andrew Rempe - http://www.github.com/arempe93

How It Works
------------

This is a single web page with JavaScript. A cronjob is run every minute to pull the latest random number from the Randomness Beacon and stores the value on our server for quick access. This reduces the delay on the user because the NIST website can be rather slow (It is a prototype still after all). Then upon 'Beaconize' we take the number of options and modulo it against the 512 bit random number to come up with an choice among the options. 

View the project
----------------

The project is hosted on [OpenShift](beaconator-symboldev.rhcloud.com)