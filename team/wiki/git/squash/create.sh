git init

for i in {1..5}
do
	touch $i
	git add .
	git commit -m "$i"
done


