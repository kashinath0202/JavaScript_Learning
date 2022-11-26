let teacher = {
    name: "Shankar Patil",
    age: 35,
    address: "Solapur",
    pinCode: 413305,

    degree: {
        engineering: "CSE",
        PHD: "Adv Computing",
        MBA: "Marketing",

        certificates: {
            certificates_1: "Hacker Rank Participation",
            certificates_2: "IFE Course",
            certificates_3: "Adv. Programming"
        },
        teacherDegree: function () {
            let totalDegree = `The Total Degree are : ${this.engineering},${this.PHD},${this.MBA}`;
            return totalDegree;
        }

    }
}
console.table(teacher);
console.warn("====================================== Adding New Property moNumber=9096949202 ======================================");
teacher.moNumber = 9096949202;
console.table(teacher);
console.warn("====================================== Delete Certificate certificates_3 ======================================");
delete teacher.degree.certificates.certificates_3;
console.table(teacher.degree.certificates);
console.warn("====================================== Add New Certificate certificates_3 ======================================");
teacher.degree.certificates.certificates_3 = "Full Stack Developer"
console.table(teacher.degree.certificates);
console.warn("====================================== Concat All Degrees ======================================");
console.log(teacher.degree.teacherDegree());

     console.log("agee" in teacher); 

   