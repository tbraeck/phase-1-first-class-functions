/* 
function Monday() {
    console.log("Go for a five-mile run");
    console.log('Pump Iron');
}
function Tuesday() {
    console.log("Go for a five-mile run");
    console.log('Swim 40 laps');
}
function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}
function Thursday() {
    console.log("Go for a five-mile run");
    console.log('Pump Iron');
}
function Friday() {
    console.log("Go for a five-mile run");
    console.log('Swim 40 laps');
}
function swimFortyLaps() {

    console.log("Swim 40 laps");
}
function liftWeights() {
    console.log('Pump Iron');
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}
function Monday() {
    runFiveMiles();
    liftWeights();
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
exerciseRoutine(() => {
    console.log("stretch! Work that core!");
});
function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }


    exerciseRoutine(exercise);

    return function () {
        console.log('Nom nom nom, this ${breakfast} is delicious!');
    };
}

const afterExercise = morningRoutine(liftWeights);

afterExercise; */




function receivesAFunction(callback) {
    const spy = `chai.spy`;
    return callback()
    console.log('YEEEAH A ${spy}!')
};

function returnsANamedFunction() {
    return function namedFn() {
        console.log("this is a named function");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}