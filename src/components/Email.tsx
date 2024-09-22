export default function EmailTemplate({firstName,secondName,emailAddress,phone,company,job,description}:{firstName:String,secondName:string,emailAddress:string,company:string,job:string,phone:String,description:string}){
    return(
        <>
        <div className="flex flex-col gap-2">
            <p>
                <span className="font-bold">Hey this is {firstName} {secondName},</span>
            </p>
            <p>My Email Address is: {emailAddress}</p>
            <p>My Phone Number is : {phone}</p>
            {job && <p>I Work At {company} and I work as a {job}</p>}
            <p>My info :{description}</p>
        </div>
        </>
    )
}