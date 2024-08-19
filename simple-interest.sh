#!/bin/bash
# Simple Interest Calculation
echo "Enter Principal Amount: "
read principal
echo "Enter Rate of Interest: "
read rate
echo "Enter Time period in years: "
read time
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
echo "Simple Interest: $interest"
