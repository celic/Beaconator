Beaconator
==========

A source of 'randomNIST'
------------------------

The Beaconator takes the randomness of a National Institute of Standards and Technology project to decide things for you! Simply provide it the options it should choose from and then hit Beaconize.

This tool implements the NIST Randomness Beacon project. The Randomness Beacon produces one of the most random numbers available in 512 bit hex format every minute. More information on this project can be found [on the home page](http://beacon.nist.gov) (Bear with me, it takes a little bit to load)

Note: This project was not made in collaboration with NIST. We are not responsible for the uptime of the beacon, nor is NIST responsible for the uptime of a hosted Beaconator.

Authors
-------

Chris Celi - http://www.github.com/celic

Andrew Rempe - http://www.github.com/arempe93

How It Works
------------

This is a single web page with JavaScript. A cronjob is run every minute to pull the latest random number from the Randomness Beacon and stores the value on our Sinatra ruby server for quick access. This reduces the delay on the user because the NIST website can be rather slow (It is a prototype still after all). Then upon 'Beaconize' we take the number of options and modulo it against the 512 bit random number to come up with an choice among the options. 

View the project
----------------

The project is hosted on [OpenShift](http://beaconator-symboldev.rhcloud.com) and is public on our own [URL](http://www.beaconator.org). 

