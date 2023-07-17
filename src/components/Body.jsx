import body from "../back.jpg";
import image from "../download.jpeg";
function Body() {
  return (
    <main className="relative h-screen">
      <div className="absolute z-10 mt-64 ml-20 mr-10 space-y-6">
        <div className="h-12 p-3 bg-red-700 -skew-x-20 inline-block">
          Play Staion
        </div>
        <p className="text-5xl max-w-xl">
          DOWNWELL AND SPACE HULK: TACTICS ARE COMING TO XBOX GAME PASS FOR PC
        </p>
        <div className="flex">
          <img className="rounded-full h-20 w-20" src={image} alt="" />
          <p className="self-center italic ml-2">
            by Mojtaba & Mostafa / Jul 16, 2023
          </p>
        </div>

      </div>

      <img className="absolute w-screen h-full object-cover" src={body} />
    </main>
  );
}

export { Body };
