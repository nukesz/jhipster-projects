 #!/bin/bash
 
 declare -a arr=("blog" "store" "gateway")

for i in "${arr[@]}"
do
   cd "$i"
   ./mvnw package -Pprod jib:dockerBuild -DskipTests
   cd ..
done