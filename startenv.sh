#!/bin/bash
#!/bin/bash

export BASEPTH="/users/fabiobongiovanni"

python3 -m venv $BASEPTH/.venvs/$1

. $BASEPTH/.venvs/$1/bin/activate
