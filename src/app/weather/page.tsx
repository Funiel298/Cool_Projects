'use client'
import React, { useEffect, useState } from "react"
import { use } from "react"


//exports boring APIs

async function getData(city: String){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48630635ebc31aba2f59c952b5672565`)
    return response.json()
}

async function getDaysWeather(city: String){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=48630635ebc31aba2f59c952b5672565`)
    return response.json()
}


export default function Weather() {
    const [city, setCity] = useState("Almaty");
    const [data, setData] = useState<any>({});
    const [days, setDays] = useState<any>([]);

    //weird states
  
    const handleCityChange = () => {
      getData(city).then((result) => setData(result));
      getDaysWeather(city).then((result) => setDays(result.list));
    };

  
    useEffect(() => {
      // Initial data fetch
      handleCityChange();
    }, []);
    //these acts needed to change city from input, sorry for such weird structure...


    if(!data || !data.main){
        
        return(
            <div className="flex flex-col justify-center items-center">
                
                <div className="m-10 w-1/2 flex flex-row items-center justify-center bg-slate-600 p-10">
                    <input
                    type="text"
                    className="rounded-2xl p-5 text-black outline-none"
                    placeholder="Search city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="bg-white rounded-full p-3 m-2" onClick={handleCityChange}>
                    <img width={30} src="https://img.icons8.com/?size=512&id=132&format=png" alt="" />
                    </button>
                </div>
                <h1 className="p-10 font-bold text-2xl">You really dont know your city?....Really?......</h1>

                <div className="flex flex-row">
                    <img width={300} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMUExYTExQWFxYYGBgcGRkZFhcYGBwcGR0ZGBoYFhgZHyoiGRwnHxYZJDQjJysuMTIxGCI2OzYwOiowMS4BCwsLDw4PHRERHS4nIigwMDA1MjAyMDAyMjAwMjAuMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAMEBBQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABVEAACAQIDBAcDCQMIBQgLAAABAgMAEQQSIQUxQVEGEyJhcYGRBzKhFCNCUnKxwdHwYoKyCBUzNJKz4fE1U3OiwhYkJXR1o7TiFzZDVGNkg4STw9L/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAKhEAAgIBBAEEAgICAwAAAAAAAAECEQMEEiExQRMiUWEFcTKRFIGhsfD/2gAMAwEAAhEDEQA/AMtoVLdK8CIpyQdJLsByP0h6m/nUQTUpR12F+lXTJy1+71rmXMb/AK86VWOtdIxWJgE8fSr37NsCEjkxBJuWKak5QqgEk8N538LVSqunQINLh8RCTZCbAgm4MikG3hYHzpuF+4HIvaWZNpwMCyzREL7xDoQOVzfSurtCEoZBLGUBsWDqVvyve1+6rbh8GMZ/N2MKgGPO0ii294mVlNvqyqPNaa9FI48RtHHYlgG6to4objRFTOjso4Mzq/a32t31T6n0T7CoYna6sSInV7AGyMubXjqd35UyTbkMlwZluu8M63HPefjuq4bfmGN2LLipkUSR/KWQpdSphlljGVr5hmVLNrrmNSW2o1+TbN0H9YwfAcqVJt+R0ZKK4Rn+D21DGSxmj6pt5DqQr7wdPrC/mBzNVHpf0oGKkCx9mJDdb2zMTpmNt2m4d5rc8dGv88YbQf1TE8B/rIKdvCmJbF4afDp1KFEVimjh41dmBItdWY6jdbmK5tuO0G1u3HmQnidB+t9HWRfrD1FWz2MrfamGvrcS/wBzJW3JiUlxeIwbxI0aQQvqoObrTKrKwOhHzY9TSlC0G50eaGcDeQPOpjYG3FRkV8hW6qHJtkGoHdoGI4aGtS9lGzI8PJtVsvzceJaNeNkh6xgBfkJAPIU39rW1BgcbgMesQktHOpUnKDooUEgGx+dYjTga5YzfU54IH+d8P/r4f/yJ+ddxWPiUWM0SMRcZmXyNiRcVpO0ukBjwEWMWFGeRYDkLZVBly6ZwpOmblwph7NEWPBGWTLeXEy304tKIFUX4AqAO4UPpK6sZ67q6KLgkDWl6wSGxAK5cgBIvltfkN5O6qPt+VflMwDA9vgRyFx5G48quPtpkMOPZEZk61I5TlbKD2TDaw/2Q17qtDIP+S17D+qjW2vviuWPloGeS0jFXT6Qubb7C48++uJrrz+6vSu0sX8hTD9TCPkaZhMY0Z2jjEbFGRI9SC4W7WOhueYwn2iY7CTYyWXBW6p1VjZGjGcqcxCsBa+h3akk0TjSAUrZBiZfrD1FW32a7SVJJY3YBGTPckBQUIBNzpqGH9mtpxOKaKHCdXCJOskgjfsk5UYdqTQaZbX10qlbd2NCvSPBiJVXrEMkiqLDMizEOQNxbIviVBrvTOc7VCuH2ph3YKk0TMdyrIjE+ABvUP0nx+HfLE0sRyMGZS6cT1eU68pGP7taJ0zVHwk2WwMLxOSALjqninP8Au6HxNM02j8m2TBOERyqYYWYb+seONjfnZyfGs9PnsBOmUL5SmQuCGUDetm3crb6Y7Sh63q7N2M4DLqCbXJB77A6VdParg4InhlskfWiVJDouewVlzcyLMB9o1UsLAWKyk70UkW+mVtnv9k2tU8o+nIthNyVoqAwTPCHvoEmdidb5CFUaW3m9vOo+rRt2HqMNkB0KxxjmSCzOT4iqvR7t3IErvkSkHavzFKrScw3eNHTdWvoBdnTQoGhQhF56cbSgODWJo4ROX7PU9tIwDcnrMo1K6Zf2qz/ee7h+dXvpjh82GcjehVh3a2PwJqjxrT55d/uqhahs9odRXaFCkBgq6ezXEC00fG6t5aqfuHrVLqQ2LiGjZnQlSBYEb9eHhofQU7Be9C8rqDZuPQjGMmFxYAFoJpcg+1HHiDf9+ZqZeyCS6S3vfJh73Nyey/aPeSCfWs32V0vxcEUsUTpkmZmfOmdiWRYzZr6dlFqW6K7VljCywSZJFXq2uAyuo90SIfeA3gggi5sbEg1zg4psnxyU+F2W2NCvR3EhgQcmO0Ise1PPbTvuPWpfa4LYbZuUE/8AOMGdNdLb/CqR0i25jcWqwSyx5CczrHEyKQtiM13Yk5rWGYDjY20QXphtHAxiKExSQgWQSRsertuQFXBy8r3tu0AApG5D1jk+jQ8ew/nnDDj8jxPxkh/I0vh5DiZcfhZu1EjRIoF1OWSFHYZl1vdjrWMwdMccMScYzp15QpdlDoqGxyIoIAAI58TvvS3/AKRdoQvLMjQlp2QyXi0BRAilRm0FlHnTNr27q4FulLbfI39jJ/6Uwv2Zf7mStn2fA42ninKnIcPhVDWNiQ+IJAPEi4v4jnXnro/taXCTR4iEqJIwQuZcw7SlDcXF9GNWib2u7UIIDwgnQEQi47xmYj1BpMJLoOcX2aT0f2aGwe0wZBEMRisfeU2sgu0Oc3IFlyE7xu31Ce3jCZtmQSBg/Vyx9sbmV0dcwtfQnKd9Z5/y9x6YR8HnjaKQSh2KEyHrmd5CXvvJkbW3GkNpdO8ZPgxgJTGYVWJRaOz2iy5e1ff2RfTnVEYStcCtya4Nd6QZ/wCY8N1YDP1eDKg6AkCM2+FO9g4IPsjCB5lizfJpi7AWLGZMTl1YWzNZRr9LjuqldDdvy4/CjCzy2EPVjIi5GKIAI2EgObeutuXfUztHB4l8N8nadWijCdUixKhBisYwz3N7FV3AbqNaabVpGOa6In+URhLS4WYDekiE/YZHUX/faph//VX/AO1H8QqJ6exS43DjrJRJljaWG0YTtAAspsdcyE2HceVUqHp3izgxs8mLqMmT+j7eX3vevv8AKslhkqsJ5FX6Nh6OYTFbNOGw0mJ+VwzOyITEUeELG0gs+d86di2U7rixsLVmHts2ZFBtFhEoQSwrKygaZmMisQBuvkBPeSeNG2F7WdowwrCGikCDKGljZnAGguyuubTiQTzvVX6Q7VmxUzTzuXkcWJsAAANFVRoqgDd4nUkmppNdBxT7PRe0cXNHDguoBJebDpJZc3zbDtk/VAA97hTCTYkQ23HOkYVmwkpcgAZmEkSKzc2yuwvv0HKsvg9rW01VVDwWUAD5ngBYfSqxdD9vYzEZ8Y8w65rx/wBEpQRoQwVE4HMzEm5J05Cu3xOcWi+rstWj2hGJVkM7yFlFrxloY4hGwDHWyBuHvbqgcTE8uwMMEVndo8EbKCSfnYSdB5nyqCwm3cRDLO0Eq/OPmlZo1bPLuJQAjKoFl4+73XKmA6RYyGJIYpYwkahUHVKbKosBvoHmgEsUmrJX20YlI0wrOwUdZJqfsVSthY5JI7IbhDlvruABXf3EehqD9pG3sRiJwk8mcRqMqhVRVL2LEAcTYakndT7oNBlw5b67sR4Cy/eppWbHF+++6KMScVtY36b5j1YAJVQzMQNATYC/LQNVaq/nEr15iO9ogR3gMwI+Iqp9I9mCGXsi0b6ryB+kv3Edx7qCL8GzXkiZxofX01rsddYaUSA6eQo/AryKGhQNCsNL50llVcNLmNrowHeSLADzqgx7qO8rPqxJ8SSfjSUB0oq4OlK2KUKFChOBUps7BOYHmynIHVc3C5BuPLT1qPwuHaR1jXext4cye4C5PhWwz4CCDCiDLdFUKF+kzcLftFtb+Jq7R4nKW7wiXUzSjt+TLadbNxhicEbjoRwtQ2zhepkKaNcm2W5vY2YDjobi/dSCYeQi/Vv5gD8atnKK9smifHjyPmCb/SLauLDAFTvt/EFP30jtLGsqEpYe/wBptQMvAAaljw4c++G2RKY5LP2VO/NcDQ3FjuvpUnt1vmpLXACNzF81wb2OmoAsRrmJ4VIsS3/KLHklsdqmVv8AX+NCQXRxluSNNfP8L+VA0fDxMzBUF2O7y1uTwFVyS2tMgje4iEOlFlawvU5tHo28aM4dWIuxQA3C91zqB4CoHEbvMV5MFWRfs9KXMHYI5b6NxpJ1sfD7q7auM9yL77V6rIlGnwP9gbXfDTpMmttGX6yH3l/LvArbcFiUkjSRDdXUMp7iL1gJFq0f2SbWukmGY+724/sto4HcGsf36dilTo6a4ss2ioR/qJxa/wBRrE+QjmI8qyHb+D+T4qaIbkdgvgblfgwrUeku2YIDiEmfL1kC5VFyxY9ahsB3BNaoW3ofl2LeXDWYFIy1zkIbKFIsdfo+FL1EopdnQi3wV5Dax9fClptw8R+X40SeFkYo4KsDYg7waAN08vu/yqDUQVqS8lONunFiybqvvQbG5cBNl96N39WVSp+PwqgxnSprottLqmliY9maMj99bsnr2h4kVJ9DJcouUSBQFG4AAeVFMy5spNid19L+B41DYvpdAjFQHYqxBsBbTfYk0ou38JMpDuFG6z9k+I/MbqRsl5RVvj4ZTukGLEmIlddRmsPBbKD8L+daBszDCOJI/qqB58T63rPdqwQrIRDIXTw3dwP0h31Kp0tlEPV5FzBcocHdpYNlta+70qjInJJIVHJTdhNvbbBxSSxG4jAF92bUlgL8CDa9WPasK4nDZo9TYOniOHiRdT41n7DdUxsHpC8CsmTOpN1Ba2U8eB0P6310ocJx7Rkcid7hipvrScP5/fXcTiszsVUAEkgXva+tvW9JLLY3POtUHQHfI4NChehQG2J4YWIU6i9vXdS0sYVrDQEbqbQyX17x8LU7xh7S+B/CildnOr9oSgaFcdrC/KhNLj7NtnqTLK6/RypfcQbhyPMAf51N7cxhjcJES0ttXdi/VKfqg6Zz/ib6Ar4TCJh8Gma94oixZTY3tme3cTwPdUFAGtdiS7asTrdjv/LwAr180/8AGwxjHt+RX4/SrV55Sn/Ff8/CC4fDKm7fxYm7HxY6mlaFCvJfLtn10McYLbFUgMoNINANxu0eYM8d7XtqArHdqAbbtLaXvS9CtjJxdoXm0+PLHbJFbd7kk3Bubg7x3GpLo/hg2dw2WQErH45QxJH0t+7uNG2ngC5DIAG4kmwI5HmaS2WjpOsTLcPvsdLKCQykagg6fvVc8yyY+6Z8vl0M9Pltq4/JO4B1IssbW+mxH0txBJ1Y3uNLiqDtKLI0iDcrsB4Kxt8BV+fDldbjKmZgNbk6ntG+u899Z7iZCwZ21LXY+J1NSt8o2XQTCYd5GCRqXY7goufHuHeanIuguKa2YIo0v2+1bu0tfzqz9DtnphsMsrDtyAMxtrY+6o8AR5k1PYedXXMu6m5NVJtqPQuGNeSg7Q6HsvuJKLDUnJKCe4Icw5k28qievbBz3w8pzKpBYpbVxqAp4C/HiO6tZphtjYkGIW0qAngw0dfBvw3UvHqZRa3O0FPGmuDJ55mdi7szMd7MSSfEmu4TGNDIsie8pv4jiD3EaVJbT6NYiLO4jZolOj2AOXmyXzD04VDqONehujkjS5JqcWO9rY0zzNMRa9rDkBoATxNIYfiO/wC8UWjQH3jSdRBRx0hmNtythoDpSpFN0k7ue80Yz92vwqBxdjlJUS20sfE2GiXIpmHZLcVCZdTbeWFvjUOK4OfOlcLAXcIOJ17hxPpRdIy7YMPh3c2Rb/cPE04GyJvqj+0Kn8PAqKFUWA/WtK1O8z8IesXyVIQtmCHstcA34E86NjsC8fvDTmNVPnU1tHZnWMHQ5W4nw3Ed4p9JlsQxFrWN7UfrVTQKxvkpybqNTzEbMdb5VZ0AvmVWIA/aIFhTFN1XLlJhxa6OWPDd412huoUNIDbE5g9x8R+FPMe3a+yB8dT+FNdnrcgftD4a/hSztmJPM/DcPhSZdiY9CoqQ6N4MTYqCIi4aRbjmFu5B7rKajIToPT0qzezaLNjo7/RSRv8Adyf8dZijeRL7NyOoN/Rd9vbMlGGmRGUoI3sCpzhQCctwbHTQH1vVdB41btqbdiS8Q+ckIIyC5A4HrGGigXF+NU6BSt0O9Dby3g+YtVevak489Fn4OW1yi/NP+g9cdwNSbV2pDo3ErTOWAJRFy9xYtc259gC/eedS4cfqTUV5PZ1urWlwyytXXj9jKOCRvdikP7hH8VqTOYMUdGQjUBrajmLEgirbtLFGON3VGcqL5EF2PhUb0qQGOKS1mDgDnZwcwPoD+7Xo5tBCEHJN2lZ87pfz2bLnjCUVtk647IzZ2DM0mQEqALsRa4F7AC/E2Poaml6O4cWNmzC9mzvm13637t26ozo9i1jmZXNhIFCnhmUt2SeBIYW8DU5tPZ6zIEZnWzq10Yqbqb2J5U3RYcbxXSbJPzWqz/5MoNtRVUQW11MKyqzZrRs6toCQAQQ1tLg21HMVm7r2SO78KvfTTGiQzKp7MULLI3DM1j1YPFuyl+4mqEsh4i/h+VedqoqOR7eg9POUsac+6NWiZHw8V1LKyx2twuAQacHLCnZUm24DeSTYDXiSeNRXQXGCTCRi+sd0P7p7P+6VqdqR8MpXQjhne3zgVTwCsW9SQNfClqjZBFF89ORnJ0J7RBO5Il+FlFzTlTOwuERBwDklj45dF9TTIYpz/irAlkjFe5imIgzb2YDkptfxtrWfdIejAQ5oAypYkrIyltNbxqDmbwIvV1mx7giLKEmO4E5ly8ZAdCyjdbQ3sDbfXdkIIoDKbvI5YljbO92IRb+FgBoBVOmw5N3wT5s8EqXLM+6S9HBhkidZlmWQsCUFgCtjbeTuJ5bqiIRvX9cq0LpvgY5YJJCoE0IQl13Em2eO+86EHX6w76zpXsfHT7qo1MfawcM7dhnNtCL/AK5UURX7hy40qqa8zXZENtPP/CvO3FOzyIoPvNOtmtaVDrvtp3ggffRcLgpHuFA05mw8B30qNmSqYyQdWGg4ajeR3XrW07VmpNc0W7Y+AE7OufLkCk2AJ7Wbnu93lUgNjwK4jcYhib2bXLpbeY7Zd/G1Q+DmaEkxEJcWNlBFhqNCO8+ppaTaM7b5n8sq/wAIBqjTajR48a3RuXngzJjzSk6fH7D9IMGsMqiJTZkubsTYqbXuxO/N8KL0fmRJi0yoAVsrHUAg31JHZvz7qZPiRmOdyW/bckkd2Yk2rnyleFyeQBv533edTPUqOo9XHHj4GLHcNsmWh9pRK0jPiEYWsqKb2W2twL5mJ4+VZRHuHOrZGpzZghUWNxde0dLbjbnr31WFQhiCLEaWPCqcmt9fxVfYEMXp277DLHbdXKWAoVJuC2jLCvw8dfH/AAvTg1I9KNhHCYmSIXyGzRk8VN7ehBHlUcDcU3JFqVMXB8HYDv8AGn2zdpPh3MkZIORlJG/K1r5TwOg18aj1FtR/nR45Q35UFuL3IKrVM0rDQAEsLWNsvcoGg9STfvprtWLKRKN3uv8AZJ0PkT6MajOj3SKMRiKZwrILBmOjKN2vMDnvqYwu0MLKfncREsXEM6hpP2QL3C8yd+4b701Rc3QyOb0mpLwNqNBM8ciypvGhB0DKdSpPA6Ag8x3mkUlizvHFIsioeyysGup1W55jce9aUpacsc7XaPoXHHq8NS5Ul/7/AGWEdIYMuY5gfq5GLeVgQfWq/tTazzyoMuVRchNCRoRncjQHgAOZ38CTAkaGx52vSOF6sEqrAsdW1ux7zVGbXTyR2vhfR5ml/C4dPlU022ur8C7oCCCAQd4O6k50ktlSaRV+rnYqe463A7gbUrSRfMGAJBBtwuOWnEGpozlH+Lo9XNgxZK3xT+LK30hmkHzeTJGwUkD3Sy33Hla2lgdByqJWLnrV1ssqtHIouPeH3Mp5cjVXxuEMTlDw1B5g7j+uVc5OjxtVpdkt65T/AOCwdES8EfWRkMH95CLC6kjQj3TwvY7qt2z9qJKD9FlF2VrXHf3r3jSqd0YU9Ub7ixy+gB+INSGIgDW0FwbqSLgEa6g7xpqONA+Sn/DU8KlHh1/ZKQoHkgmbXPJe51spjcoo5C+XxNqlNoMQQzXyJY2G93JsiDz4cSRyNVvr5Pk6oFy2YBWAuEK3KKeRDhADaxBHHSpTCbXkcKTCXAGZZdI493vEP2l0J3BhrXr4suOMOHSPlZ4sm9qSd2KY/DMxw3WMc5dwxQ2srI7lAw1ygogvoTbvpVY3gX5u7xj6B1cDnGx1P2Tv4EbqLJI5KSHKWbsxi5yLmGYknexIXkOA01NO+uW+XMM3K4v6VHl1L9TdB8f9lmPTrZUlyVXpptRBg+rhOZHYBpDpm3ubXHaYka2031RYY7eJ+HdV86SYIqmIVUzKyCRQo1BDhiSO45t1zYjlVIj50GXPKa5DxYlDgMooUKDG1TFI5wkqW6t76vmFgTe4y2uNxvax8KnVqpk3Plpzqw7Lx3WLY++N45/tCszY2oqQOPInJoe0KFN7SEtqFW+ltWIsOeg1vU65Ht0L2rtIiE/Xb/d//mivDoSXcjkDb+EA1tI6/oO+IANtSeQFz58vOq/tDEiSQsFtoB3nfqbfrSpPFz9Wha2S/ZReNzvZu/jUI418vu/zp+OKXIqcrFTQoUK0w0T2tbODQRzgaxvlP2ZP/MF9TWaLxHf/AI0+2vt3E4gWmmdxfQaBb/ZUBb0xCXOvp+dWaicZy3ITGEoLawZr7h+VAQ3N/wDKlVSjVLuroZsvsTEI7vSjZKNQrLbC2ocbLxXVSB/o7m8Dx8jrVqExb3Bp9Y7vIbzUdsnYoWzyC7bwDuX8zUvXHt6LFOEKlwvjyIfJAffJbuPu/wBnd63qPj2rE06xLoFvYgaFrWsPK/nT/aOOWFC7nwHEngBWfLKQ2YaEG48b3pkY2L1upWGUVGvl/NGg4jsHrBu3OO763lx7vCuYvs2lHD3gOK8fTf6867szGCaJXHEajkdxFdwegKfUYgeGhA9CBS+iy1JWunyguMNgJR9Hf3od/pv8qjelCAhSouV963BW4nzA+NKPtKJI3juCVLqqjlrYeAvbypxsmC8I6w5i63YniCLAelq3oRNrNeOPlW/piPRvFho+rPvJ8VJ0P4VK1F7F2d1TyXNyLAfZNm17/wAqkxWDtLuWNKXa4/o6swXMrMFWRSLk2CyDVG7t1vELSmxcUkzdQZLoAWVBYadlskltSAHAtp7jA3FITglTl0Yar3MDcfECpKeeOeIPJBIAyXEgCkpcbwUYstr76JPijyPyOHZl3ryh7hlEqszgMjHsg2IKroDbdqbt4EUodnQ5cvVJbllX8t9Ndm45niTq47kKoNzkQEAAgGxJ1uN3DwpZjiLG/Up39t7fw0BEhbD4NEuRckixLMzGw4XYmw7qpnSno9BCrSxyhSTpEbEEk6hLajnx8qielO0mlmIWZpIwLDUBCdLlVXS17gb91RsaAbgBR9HLk6xtrSe/U+Q/XGgdT4ffXabjhSticmS3tQQ+8PP9fClYnysG3W4jeL8RSUnPl+jR6a1aoSTsOOI94XH1l/EflS/ytLXzC27TU35W33pXotgocVGYz83PGB2ltZ03Asm4kbiRY7tdaJtno1PCpkIR1XXMpseWqtrre2hO+pZaSSW5K19DI6qceHyETGIeNvEEffRJNoKASFYjnaw+OvnamUyEiyi5Olt9ydw3a68qdQ7MxDkRiJw5BHbUotwLntMAOB3UmOJy6Vmf5c2uEiO2ldhnZrkG1h7ovvH+NRuoPMD7j/lUvtHDNEjI8braw7S2sSCRqNPok+RqKRtbkHuqvHF1TQMJy7Ysu4V2kRIF0JtyoUt42UrIgIvE7/upZRauIK7QN2NXPLBQoUS9/D7/APCtjFyfBkpJHS193r+t9SXRrBhpc51CC+v1joPQX+FR4FWToxFaHN9ZmPp2R/DTZRUYjdDH1c6vpckpQoU22mxEZtfUqLDQm7AEA8Da9KPo5y2xbGOIOdmYozJuU5cwsN+g11N+GoAqNOyYnBCo9+BCtp66bwasCYdmAzmw+omg8C28+VqMdJEUCwyP8Clvxp0c9R20jzMmgWSe+TfJCdH9mYmIm5CoTuOpPeADofOudJZMhRVYh2uzEEi/AA24b7eFWOqbtabrJZGHOy+C6D4gnzoY+6Vg6uK0+BQi3y+LG6tp+FXPZ/8ARR2+ov3CqTe9mG/l+FW/YU4eFCOAy/2dPwoZw2i/xmRObXmha/zunFbN3WN1v6tTikYD25B3q3kVA+9TS1AexDz+wVIbD67qhkZLKzizIxOjGwzBhwPKo8UsjsuHiKyGMySkLYLr1hbJ7wPca1K3SPO/KNRgm/sc4PHskUiFVBhQX17IJZxb7ICg35Go32h7SURrAG7TkFwD9AXsD4tbTiAaiMZtOSSR9WRZdCo3m3BzqOB3W303mkaRpC5zuwtci1+zpcjTusKrx6WTalLg+ayatJOKIMtuHEGx9DalkOlN5V1B9fL9H0pW/ZPnU+SNMqxztBY936460auLXTVKJwEUkVOgBPwpRTcVx1rmYOdnY14JUlj95Tu+sOKnuI/WlarDJDisPcdqORediOY7mBHqKyJWvVs9nW2Mkhw7nsyElO5wNR5geo76binT2vpmSRYk6NxQ2liVmkQ5hma5IAIKjgCQTY232pxip5HXrFUFFAljYe8bBTa3NgZF3aC3PR9tGUpFI6i7KjEDmQCQK7goVWNEXVVVVHeAABVCgo8R4AIXbuBGITEoPeMUTR9+TO6sO4klazJjcA+FathuysH1o5Wh8VBZLHyVG/dFZp0hwvVYiaMfRlNvAnMvwYUjMvIcRqyA7xQrseovQpIQpQoUWRrbt5/V6iSt0Wt0jjm+nDj+VHFcRbV2qoRUVRO5WwGrbsZLQRj9kH11/GqcxJ7K7zp5nQAetXqJMqheQA9Bal5X0et+Jj75S+g1N3F5VG/KpPgSQAfGwb404rgQAkganf38KUe1KNnbVHjHR9ZIS4GUBfS5a3PUgeVF2vtURjIurnT7N+J7+6oKVOza9vj+jeqMOneRNvhEWp1Si6jy0TOL22uRsoYMQQpI0udBu3VApg7DVje3lR82ZNeK6+lBR83Y6dk8e6rIaeEOuTzc+V5mnL4GUR18QD+dTXRzGhHMZ91zp9r/AB/CoaLgTvt5eVBhc+AuPHn8KkkrVEWHK8WRSXgvbRjMG4gEeIPP0o1Q+D6QR5FEmYOBr2bgnmLUd+kUI3B28Ft/Fap9rPpI6rBV7l/Y+xkyqFVnCB2C5joBfUnxsDbvtSXTTaCrJBEu5UDoQeyPeUEjj7q2PDXnVe2vtEzldMqrfjcm9t/Ld8abbOW80a85IgO67gWHdxp2KDjJSPC/I6hZpNR/iWrA7E+UyysjKgUq4JBbWQZ8tri1iWB8LU8bowqoxMrdYJFV9BlIcqFKg6jssOJ1BqzYkWljK6Fs6nvUKWBPgwH9o86jp4Jb2ezSMgey7iYJVdVG7Uh7V61NHgUmZ70k2d8nnki1IVgQTa5Vtbm3iR5Go4e6w5X+6rn7TIAwgnWxDqyX56Z0+BaqY38Qt8Lj8a8/PCm/ovwT6D0KCnQUK44Ku8+v50ek33g/rX9Cj1iMCOvEf50pDMVKuhsykMp5EG4+IrlEYW14cfzrjjYtj7QWeFJl3MNRyO5l8iCK5swZTJEPdRhl7lYBgvkSQO61VP2abSsZMOTofnE+Acfwn1qzKrZp0Vsjl1cG17pljU2/sMvdp3VZCW5JgMRnuryHUhJo5SOSMmRj5EM3kapntGiAxYI3PHG3ibst/RRV8w6FZ7Obl4UF7WDNGWzG3C/WDSqH05jscPobBHUGxtlWQhRf7JFBm/ibHsrnEj9a0KTxUpU6fq3+dCprDoeCk01JPkPx/XdRpDYE1xBYVPijzZRkfgNRHbgN/wCtaDycBqeX512NbeNPFnU7NiNCCCD3jW/rVl2ftyN7Bzkbv90+B/Cq3QIoZQUinTaqeB+3r4LwCKGCQTTrhw4UlS7H6WUEaL+0b+QBNUmOVl91mHgSKm+gkLSY+NrklQ7sSSdAhT73FBDH7lZbn/JuWNqKplr6U9FlaFfk0MYdXDGwAdxlK2znedQdTraoXYvQ2aVj13zSK1mFwXNrGwtoN++/lWiWprgT2pe6T/gQ16KdcI8ZZ5pUQadD8IksY6sspD9h2Zl0Atod/HQ1HbZ6K4dYsXIocGNXKqHOUfNq4795Ol7VYzA6PCGkLkyvqQAQDG+mnh8aa7Z1gx6/st/cpQt8MBZJX2ZPLu8x94oX7Xl93+dFxGq6cbffXQbkHmD+FSDRW1C1ChWmgpxseVUxMDP7okW/9oa03pKZbkef3GtTpmS5Rse0jlXrv9Xdj3r9Megv4gUMbpJAf/iMvkY3P3qKYYPEtiMAGAzM8RDAbyR2XA7zY+tO8XiEbqWVgQZEYa8GBUG371end8/o86qIHpPhs+zVa2qZH8NcrDyDt6Vnyjsju/CtO6QpaLGIPdMHWW5MesvblfqwfG541mKtZfM/eakzL3f6KMT4OQnsij0nCbaEW1NvOlKQhwWXcaMDQosW7w09K44NQoUK44cbDx3UYiKXgri/2T2XH9kk+VaptjSPrR70ZDg9w98eBW49DwrImW++tP2JMcRgEsQXKZDfcWQ5Tm8cvxp2F9xBkSO1lITrFF2iOccyBcMvmpYeNqiNubJE0ZgBBDhpIG+o4sct+KMGPgL91pGTaDHKVyKMxEokYAqQRcDXXTMQePZ4G9RibUhSJGE0d4HkAXOt2jUstl135LEc7AcabKn2CjOCvAjdw4g8Qe+hUr0zjjTFOY2BSSzgqQRc6MNP2gT+9QqRxDIubd5j76OImc5UDE8lUs3fYDWiTbvMfeK0H2D4fNtFntomHkN+RZ4lHqM3pSMXRRk7KB8keMXeN0ud7IyjTgCwFzbWlZMNIts0ci3NlzI4ueS3HaPcK2j24qs+yTKuoinB9Gkw5+L1Y+mGxuvjwrqLvBisLKPBZFWTyyMx/dpos86/JJb5eqlzWvl6t81t18tr2vxoksTL7ysutu0pXXlqN+m6vQcf+n3/AOzU/wDEPT/AYn5Wcdh50Ro45eqAt7yNDE/aBJubyHXThWHHm2KFmNkVmO+yqzG3Oyg6aj1q1+zCYJNiOsUr2VFyrAggm6nTQm97b+zTf2RbX6jaWHJNhMDC3/1AMv8A3ix1sO0sMcHDtGZLB55QYj+3JHDChPhKWNFF07MkrVEG2PjvYEsbAkIrSEBtQSEBsDwvvpns3aEZads4t12W/eIoyRbfca3G/Q1P7Ik+R7JwTQBQXOCDEi+br5IVkY95DnXhpypbbkIXbGz2GhkTFZ7fSMSKEJ7wJXHn3Cj9V30BsKxj8dGZYMrXyyEta5ygxSgFgBoCbAE8ab46RWixxBBUxk3vpbqQP+E1fdkf6Ux3+wwX34qqPsUKcWVkt1ZxnbvuPzuJ6sHxlWMW46VqyN2c4UZXNszEKgkaCZU0JdoZFS1t+Yra1IwYSVhdY5GUEgsqMVHmBblXorpP0lfBSPJiIpJMGY0AaKMOUe75+tuwKqVyWNrd998V7Kij7OxPUKRG2IxXVLYAhTbIttwNiBakjDDjh3ChzG4U2sxRguu6zEW1uLeNK4fZ8zrnjhmdBe7JFIy6b+0qkaVtXSvZrLsGHDygqwTARSC4uCJIUYXBtob7jVlxeJMGIwWGhVEik61SoW1lijzKEt7ovXHHmuCFn/o0Z/sKz+uUG1cfCSntCKQhScxEb2Frg3NtCOIO6vQHR7ARxbYx+RQvWQ4aRgNBmYzBjbmctz3knjXdj/1LaX/WNofxPW2czOfZziSIGjcMoz5oyysFZXA91iLN2gTp9Yc6e4OPDlGcsAxaSz3JyjrWZLcLghfQCrVL/oDCfY2b/fYalejmLbC7ElmiAzQfLmQNcrdJ5yAwBBI051QszUVx9CHiTk+So9bHPmD5WWZVilUNqjjNlPPK1zY/ZI36UHH7EmilePq5HyMbMsbMCD2lN1FgbMNK2z2nYfPFg5lUGQYhO4shjkkaO/IlFIvpdRTj2aTh48W66g4m45/0GH0I4G4sR3Vk57obvNnRhte0wM4GUnL1Mt7Xt1T3tuuRa9tDr3UR9nyggdVKCdymN9ba2XS5010rcvZ5trF4nG4h8Zh/k8i4eABMrrdesnIaz67yR5UzxG28ZLtrCQz4fqoY58T1MmVx1iiGVb3Oh0sdOdJcrG7TGXwkygs8Mqgby0bgDxJFqLJhZE9+ORAToWRlF+IGYDXS9bX7X9qYoJJhxEBhWijd5yjmz9bpEGHZBJRBr9fwpH+UKt8JBqBacnx+bk0Gh1obN2mNQws5siMx32VWY252UHSuTxOnvo6627SMuvLtAa1oX8nnN8tnzf8Au5/vErTNqSddh9oJjY1WBC6ozCwaMRo3WXY7w5azC2qi2ord3wdt+TzlBhpnF0jdgDa6oz68jlFgdfjTnDz4pQYUaYakmNc6tc2JOVQG3WNbR7FrQ7JjlfTrZ2vw1aRcOL+aiiz4XJ0mR+EmDLeYzIfgi0PPyGtq8GIT4ZxdpEcc2dWGu7UsN9cEfhXpjA7SaXGYvCuqGKKPDldLluuEucPc2I7A4cTXnXbOHWPEzxqLKk0qKOSo7Ko9AKTNUrGQd8DAxeFClDQpe5jNqE5RcEVq/wDJ3w92xcvC0CD/ALxmHxWsqU6VKbA6WY3BB0w05iR2zH5uJ7tYDUyISNB4U3HKuBWRXybJ0n2dE+w8XHFKJkC4iXPcHtLM+IYaadlrr5VZp9piOfDQm1pklC97xqjgD93rD5V55wnS/HRwPhknIhfrM6mKFgetv1ly0ZPazHjx0pXGdN9oSvDJJiSzwMWiPVwjISMpNljAa40s1xT6FUbRH/p9/wDs1P8AxD0+6L4Z0mx7OrKr4oMhYEBlEMAzLfetwRcaXB5VhJ6ebRE5xPyk9cYxFn6qHWMMXCZery+8Sb2v30rifaLtWVGjkxb5WBBCxwIbHeM6IGHkRWHFVgkaPJIpIZbMp5MtmU+RWvQPtW2gyR4EA2EmLiDd91ew8LkHyFYDOvZty/CpzbXS/G4lYxiJzIsTiRB1cSWZdxvGgJ051vTOZs0kLPsjAqiliDs24AJIyywZrgbrWN+VjTnpE4/nbZf2MaPWOO3rkb+yaicDNLED1EzRo126vKjoCxzMyBhdbkkkA2uSbXJNMMjPiJTLLJI5SBhISFdSrS2yZAAgBGgA4m97m5+k7A3ouezIGG0cY5VgrQ4MKxBykqcRmCncSMwvyuKoOGwgeYxFsq4mSRM1gwAE05DAHQk9agFSu1cZjWgkQYuS+RrEJErsQDozqgtfmoU8iKYY2GMx4cgZYw0YAW65VcZUyldVIfqyCNxUUUcbVmSknRcuj6zxTPgZXkxEaQRus8qdpizSI0TsBlcgKpuddTe9MegeHSDDY5IbBYsXi8gFrLlsQo7hu8qz3pb7Qdp4aV8OuIGUBCshij6zK1t7Zct73F8vDnrVa2Z0xx+HieGHEMqOXZgUicln95i8iFiT40pquBi5Ne6U7QaTYkGImIzOMBI5tYXaWB2NuA1NTu3IWOOwDBSVU4jMQCQt4rDMeFzpXn7EdMsXLhVwck+bDqsaiIxxDsx5SgzBAxtlHHW2t6kdn+1HaUMQiTEBgBZS6JJIotYAMRrb9rNWHGybLnU7Zxi3FxhsLpx0aUn+NfUUngI2TBbRLqUvNj2GYFbqS5DC+9SONYRhOkGLTEHFpPIs5JLSaFmzbwwIKldB2SLdkWAsKltve0HaGKiMM0wEbe8saKmbuc6kjuBAPG9EoszcjVkwkkuwsIkSNI3VYBsq2uQjwO1rkDRVJ8qTwOHkfYWKjVHMjDaChApLljNiBlCre7X0sKyzAe0PacMaRx4pljjVVVRDAbIoAABaMk2A3m9WuTpS0MbDD7RkHaZ8gjw75mkcyyWvCTmYu5GtgTwGlGoSargFySdlv9pcxiw2DNtRiogR3dVKHPkuY+VH9mMRSPGj/wCbdh+9DA4++s+270paZGVpJ52yOqvKI4kTOMpZUjRbtbiVvqRcAmmmD6VY6LrOqxBjEjZnCxQkFsqpcdYjMOyijfwrXGobfsBT91ls9i/SPEY7FYqfEMrOIcOt1UKLBpSBYcbsaVaXaL7bw3yqMrhkxGJWBsqAENDNl1Bubql9RwrM9g7SxmCaVsFKI83ZbsoxIUkgfOIwFsx3UvtDp/tYtG8k7ZomLxnqIBldlaO+kdm7MjDXnztSeV2OtPo0v2wNjCksao5wnVQsxVYyM6yszZ2JDADJEdOZpz7bdiz4nDQiCJpCkxdguXRRG4vqRzFZVtD2g7UniaGbFFkcWZepgW45XEYI9acN7S9rMCpxZsQQfmMPuOhH9HQOcQ1CRO/yfT/z2c8Pk3/7ErUMHBJP8tjxaZ4euKxrIgymLqor5dO0ucvrzvrpXn3YO3MRg3MmFkMbFchIRHutwbWdWG8CpXFe0PakiNG+LYqwKsBHChIOhAZEDDxBBoY5IpBSxts1To5gIV2JhEmlEKZcNKXJA7RlSdQSfrPYfvVI7Xwn/S2BmA/9jikJ8OqZR8X9Kw/GdLcdLh1w0k5MKiMLGIolAEVjGAyoG0Kjjw1qWk6YbZZ0dsQcyE5CYsNoXGU7k10NEppguDNg2Pg5F2ljpWRhG8eEVGIsGKCbMFPG2Zb+Nef+kRvi8T/1nEf3r1YZum22yCDiXtbW0eGUgHS+ZUBXx0qsPs+YEAobm51IN9QCSb77ketBOW5Ug8cadsb0KcPgJBvU+qn7jQpO1jLGybq5L7p8DXKFauzn0ch90UahQq0QJj3/ACo9ChWAgfcfA0X6Pl+FChWmG5YT3F+yv3Cmyf1l/wDYx/xy12hVhOPH3GoNv6jB4YT+OKhQrGcUr2o/1s/7CP8Aikqu0KFST7ZRHpDUbv1zor8PGhQpa7ODYqkFoUKdIBHDx8DVuw3uihQrYAzFTXKFCmMWNdl/0f7z/wATUntr3B9sfca7QpUv4v8AQyH8v9kUaPHurtCvPfR6CO0KFChCAac4n3vIfwLQoUcQZCJ4+H4ijr+dChRgibUKFCuMP//Z" alt="" />
                    <img width={300} src="https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?fit=700,500" alt="" />
                    <img width={300} src="https://www.digitalmomblog.com/wp-content/uploads/2022/01/pathetic-cat-meme-1.jpg" alt="" />
                
                </div>
            </div>
        )
    }

  
    const arr: any[] =[
        [
            {
                image: 'https://img.icons8.com/?size=512&id=60022&format=png',
                title: 'Visibility',
                arr: data.visibility + ' km'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=21890&format=png',
                title: 'Pressure',
                arr: data.main.pressure +' Pa'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=74197&format=png',
                title: 'Wind speed',
                arr: data.wind.speed + ' m/s'
            },
            
        ],
        [
            {
                image: 'https://img.icons8.com/?size=512&id=9269&format=png',
                title: 'Humidity',
                arr: data.main.humidity + ' %'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=R654Xec7UOWX&format=png',
                title: 'Max. Temp.',
                arr: Math.round(data.main.temp_max-273) + ' °C'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=-uAldka8Jgn4&format=png',
                title: 'Min. Temp.',
                arr: Math.round(data.main.temp_min-273) + ' °C'
            },
        ]
    ]

    const miniArr: any[] =[
        {
            image: 'https://img.icons8.com/?size=512&id=9269&format=png',
            title: data?.main?.humidity + '%'
        },
        {
            image: 'https://img.icons8.com/?size=512&id=60002&format=png',
            title: Math.round(data?.main?.temp_max - 273) + '°C'
        },
        {
            image: 'https://img.icons8.com/?size=512&id=9260&format=png',
            title: Math.round(data?.main?.temp_min - 273) + '°C'
        },
    ]

    const months = ['' ,'January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']
    console.log(days)
  
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col  w-full h-[600px] text-white items-center bg-cover bg-[url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] bg-no-repeat">
          <div className="absolute m-10 w-1/2 flex flex-row items-center justify-center">
            <input
              type="text"
              className="rounded-2xl p-5 text-black outline-none"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="bg-white rounded-full p-3 m-2" onClick={handleCityChange}>
              <img width={30} src="https://img.icons8.com/?size=512&id=132&format=png" alt="" />
            </button>
          </div>
          <div className="absolute p-10 flex flex-row justify-between items-center w-full mt-[20%] ">
            {data && data.main && (
              <div>
                <h3>{data.name}</h3>
                <h1 className="font-bold text-9xl">{Math.round(data.main.temp - 273)}°C</h1>
                {data.weather.map((weather: any) => (
                  <h2 className="font-bold text-3xl">{weather.main}</h2>
                ))}
                <h2 className="font-semibold text-2xl">
                  Day {Math.round(data.main.temp_max - 273)}°C | Night {Math.round(data.main.temp_min - 273)}°C
                </h2>
              </div>
            )}
            {data &&
              data.weather &&
              data.weather.map((data: any) => (
                <img
                  key={data.id}
                  src={`https://openweathermap.org/img/wn/${data.icon}.png`}
                  width={200}
                  height={200}
                  alt="@" className="z-10"
                />
              ))}
          </div>
        </div>

        {/* It is part with weather today and other days */}
        <div className="p-10 justify-around  items-center flex flex-row w-full">
            <div className="shadow-2xl w-2/5 h-80 rounded-2xl flex flex-col justify-center items-center p-5 ">
                <h1 className="text-3xl font-bold mb-5">Feels like: {Math.round(data?.main?.feels_like - 273)}°C</h1>
                <div className="flex flex-row justify-between w-10/12 font-medium">
                    {arr.map((div: any) => (
                    <div key={div[0].title}>
                        {div.map((kek: any) => (
                        <div className="flex flex-row items-center border-b-2 border-black mt-2" key={kek.title}>
                            <img src={kek.image} width={20} alt="" />
                            <h3 className="ml-2">
                            {kek.title}: {kek.arr}
                            </h3>
                        </div>
                        ))}
                    </div>
                    ))}
                </div>

            </div>
            {days?.slice(0,4).map((data: any)=>(
                <div className="w-36 p-5 h-80 shadow-stone-900 hover:duration-500 hover:shadow-stone-400 duration-700  shadow-2xl flex flex-col justify-center items-center rounded-3xl">
                    <h4>{data?.dt_txt.slice(8,10)}   {data?.dt_txt.slice(5,7)<10? months[data?.dt_txt.slice(6,7)] : months[data?.dt_txt.slice(5,7)]}</h4>
                    <p className="text-sm">{data?.dt_txt.slice(11,16)}</p>
                    <h1 className="text-2xl font-medium -mb-3">{Math.round(data?.main.temp - 273)}°C</h1>
                    <img width={100} src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}  alt="" />
                    {miniArr.map((kek:any)=>(
                        <div className="flex flex-row items-center">
                            <img src={kek.image} width={20} alt="" />
                            <h3 className="ml-2">{kek.title}</h3>
                        </div>
                    ))} 
                </div>
            ))}
            
        </div>
        
      </div>
    );
  }
  