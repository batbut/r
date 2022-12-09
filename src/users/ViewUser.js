import React from 'react'



export default function ViewUser() {
  return (
    <div>

        <div className="flex justify-center">
          <div className="lg:w-1/3 w-full">
            <div className="p-10">
              <div className="mb-10 flex items-center justify-between">
                <h1 className="font-bold">Go back</h1>
              </div>
              <div className="bg-slate-100 rounded-lg px-5">
                <div className="flex border-b py-4">
                  <div className="mr-4 text-slate-400">ID</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
                <div className="flex border-b py-4">
                  <div className="mr-4 text-slate-400">Noregis</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
                <div className="flex border-b py-4">
                  <div className="mr-4 text-slate-400">Noinventaris</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
                <div className="flex border-b py-4">
                  <div className="mr-4 text-slate-400">NamaLokasi</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
                <div className="flex py-4">
                  <div className="mr-4 text-slate-400">LokasiTemuan</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
                <div className="flex py-4">
                  <div className="mr-4 text-slate-400">tahunperolehan</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
                <div className="flex py-4">
                  <div className="mr-4 text-slate-400">deteminator</div>
                  <div className="text-slate-800 font-medium"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
