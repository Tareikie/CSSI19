adjective1 = raw_input("Enter an adjective:\n")
adjective2 = raw_input("Enter a second adjective:\n")
noun = raw_input("Enter an noun:\n")
verb1 = raw_input("Enter an verb:\n")
verb2 = raw_input("Enter a second verb:\n")
story = """Jack be nimble, Jack be quick
Jack jump over the candlestick

Jack be {0}, {1} be cool
Jack jump over the {2} pool

Jack be quicker, Jack be fast
Jack jump over the ship's {3} mast

Jack bounce higher, Jack bounce far
Jack {4} over the planets and stars"""

print story.format(adjective1,noun,verb1,adjective2,verb2)