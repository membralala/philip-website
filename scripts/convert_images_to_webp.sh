for f in $1/*; do
    outpath="src/images/"$(basename "${f%.*}.webp")
    ffmpeg -n -i $f -c:v libwebp $outpath
done