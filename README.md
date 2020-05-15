## Term Extractor java implementation
Parse medical terms and their definitions from a given sentence. See Test.java for example use.

Adjustable configurations are set in "setting.conf": 
* taggerPath <br/>
Path to the stanford POS tagger file, default under "external" folder.
* redisHost & redisPort <br/>
Host & port of external redis database containing a set of medical terms and definitions
* maxAllowedEditDistance <br/>
Maximum allowed edit distance while doing fuzzy matching(e.g "vyrus" and "virus" have an edit distance of 1)
* maxSuggestedCandidates <br/>
Select top-k candidates with minimum edit distances while doing fuzzy matching