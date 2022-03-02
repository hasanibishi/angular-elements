call del dist
call ng build --prod --output-hashing none
call node build-script
echo Calculator built