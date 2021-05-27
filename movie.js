class movie{
    constructor(newname,
        lengthinHour,
        lengthInMin, 
        lengthInSecond,
        newratings, 
        newcategory,
        newType, 
        newReleaseDate)
        {
        this.name =newname,
        this.length=
        {
            hour: lengthinHour,
            minute:lengthInMin,
            second: lengthInSecond,
        };
        this.newratings = newratings;
        this.newcategory = newcategory;
        this.newType = newType;
        this.newReleaseDate = newReleaseDate;
       }
}

