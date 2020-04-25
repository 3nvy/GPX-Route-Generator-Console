# GPX Route Generator

This app generates a GPX file with coordinates sorted in an optimal path, based on the nearest-neighbor algorithm. By providing a file with multiple coordinates to the app, it outputs a GPX file with a optimal path with the first coordinate as a starting point.

The app comes with an example file (coords.txt) which will output an optimal path GPX file for Central Park, New York.

# How to use

Install necesary dependencies
<pre>
npm i
</pre>

Run app
<pre>
node generator in=coords.txt out=central_park
</pre>

Argument | Description
------------ | -------------
in | name & extension of file to read the coordinates from
out | desired name for the exported GPX file

* All arguments are optional

# Output

The outputed file can now be imported in any app capable of tracing routes from a GPX file.