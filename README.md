# scalastar

The purpose of this repository is to create a web application that generates warrior cat names based on some identifying features. Link to the original game can be found (here)[https://web.archive.org/web/20051013063148/http://warriorcats.com/name.html]  


# Front End PLan

https://coolors.co/1a2127-ec5d11-c8ad55-658e9c-8e5572
Pallete


Initialize application 

Create Frame For Body



## Plan for Framework


### main
runs the program. For starters this is just going to be the front end. (This may expand once the Frontend becomes technical)

### Front End: 
Handles the creation of the front end. For Scalastar 1.0 This will require Just a terminal that will ask for you inputs

### Generators
Each file will contain a seperate type of generator
Each one will have input and output information


Make an interface called Hasher with two methods 


//performs the hash
String hash(String input)

//gets the hashtype of this 
HashType hashType()

Implement the interface with appropriate hashing function and hashtype one in each file, eg

{
class Sha256Hasher implements Hasher

@override 
String hash (String input){
//code to SHA256 hash
}

@override
HashType hashType(){
return SHA256;
}

In the main file, for initialization make a HashMap that maps HashType to Hasher.  Load it with all the different Hashers you have implemented 

Sha256 sha256Hasher = new Sha256Hasher();
map.add(sha256Hasher.hashType(), sha256Hasher)

For execution, Get the input of what hasher the user wants to use from the user, (offer them all the enums on a list where they can choose by typing in a number or something). Load the Hasher they want from the map based on the hashType they gave. call hasher.Hash() on the users string input.
Enumerated type: 

Interface: 


Original Methodology
Using the same original values as the first game. 
input First Name Last name
FIle small enough. No need for File

Russell Methodology
Using a more advanced methodology to be established later. Some sort of non-reversable, more labor intensive version original

### data
Database for all names, Includes path to each. This will start out as just the data for 

prefix.csv

## Testing: 
Each file will have one of the same tests. Each Test will be a unit test. This is a tiny application. There is no use for Mid level, or integration tests.

   


## Backburner: 

Use sentiment analysis and (this)[https://wcrpforums.com/thread/1973/jackals-warrior-name-guide] data to provide a more accurate 

Build a Database for names? Probably not worth it from a performance standpoint but a fun thing to try



