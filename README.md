# GPX Route Generator Console

Console interface for the [GPX Route Generator Core](https://gitlab.com/3nvy/gpx-route-generator-core) project.

The app comes with an example file (coords.txt) which will output an optimal path GPX file for Central Park, New York.

# Requirements

You need to have [NodeJS](https://nodejs.org/en/) installed

# How to use

Install necesary dependencies
<pre>
npm i
</pre>

Run app
<pre>
node generate in=coords.txt out=central_park type=2OPT count=5
</pre>

Argument | Description | Default value (if not provided)
------------ | ------------- | -------------
in | name & extension of file to read the coordinates from | coords.txt
out | desired name for the exported GPX file | default_route
type | Sorting algorithm (none, 2OPT, KN) | 
count | Number of interactions (only if using 2OPT) | 1

* All arguments are optional

# Output

The outputed file can now be imported in any app capable of tracing routes from a GPX file.