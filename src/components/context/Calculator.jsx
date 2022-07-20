import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'
import { BsFillSunFill, BsFillMoonStarsFill, BsBackspace } from 'react-icons/bs'
import bgCircule from '../../assets/circulo.png'
const Calculator = () => {
    const { darkMode, setDarkMode } = useContext(MyContext)
    const [resultado, setResultado] = useState()
    console.log(darkMode)

    return (
        <div
            className={`${
                darkMode === true ? 'bg-black' : 'bg-gray-200/20'
            }  min-h-full `}
        >
            <div className="bg-[url('../assets/circulo.png')] m-auto grid grid-cols-1 grid-rows-auto content-start w-full rounded-3xl">
                <button
                    className="bg-[#28b4ff] shadow-[#28b4ff]/50 w-8 h-8 m-5 rounded-full flex items-center justify-center justify-self-end text-white shadow-lg"
                    onClick={() =>
                        setDarkMode(darkMode === true ? false : true)
                    }
                >
                    {darkMode === true ? (
                        <BsFillSunFill />
                    ) : (
                        <BsFillMoonStarsFill />
                    )}
                </button>
                {/*painel*/}
                <div
                    className={`"text-black pr-3  m-1 h-48 sm:h-32 flex flex-col items-end justify-center text-6xl font-semibold'`}
                >
                    <div
                        className={`${
                            darkMode === true ? 'text-gray-400' : ''
                        } text-xl font-medium`}
                    >
                        600/800-3*10
                    </div>
                    <div
                        className={`${
                            darkMode === true ? 'text-gray-100' : ''
                        } text-6xl font-medium`}
                    >
                        {' '}
                        =50,50
                    </div>
                </div>
                {/*opções*/}
                <div></div>
                {/*Teclado*/}
                <div className="  m-auto border w-10/12 tablet:w-5/12 p-1 grid grid-cols-4 gap-2 justify-items-center">
                    <button
                        className={`${
                            darkMode === true
                                ? 'bg-gray-500 text-gray-300'
                                : 'text-gray-500'
                        }  w-14 h-14 rounded-lg text-cyan-500 text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        Ac
                    </button>
                    <button
                        className={`${
                            darkMode === true
                                ? 'bg-gray-500 text-gray-300'
                                : 'text-gray-500'
                        }  flex items-center justify-center w-14 h-14 rounded-lg font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        <BsBackspace />
                    </button>
                    <button
                        text-gray-300
                        className={`${
                            darkMode === true
                                ? 'bg-blue-600 text-blue-300'
                                : 'bg-[#0b8dff57] text-[#0088ff]'
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-3xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        /
                    </button>
                    <button
                        className={`${
                            darkMode === true
                                ? 'bg-blue-600 text-blue-300'
                                : 'bg-[#0b8dff57] text-[#0088ff]'
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        *
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        7
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        8
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        9
                    </button>
                    <button
                        className={`${
                            darkMode === true
                                ? 'bg-blue-600 text-blue-300'
                                : 'bg-[#0b8dff57] text-[#0088ff]'
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        -
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        4
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        5
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        6
                    </button>
                    <button
                        className={`${
                            darkMode === true
                                ? 'bg-blue-600 text-blue-300'
                                : 'bg-[#0b8dff57] text-[#0088ff]'
                        } row-span-2  w-14 h-24 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        +
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        1
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        2
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        3
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }  col-span-2 w-[8rem] h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        0
                    </button>
                    <button
                        className={`${
                            darkMode === true ? 'bg-gray-800' : ''
                        }    w-14 h-14 rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        .
                    </button>
                    <button
                        className={`${
                            darkMode === true
                                ? 'bg-blue-600 text-blue-300'
                                : 'bg-[#0b8dff57] text-[#0088ff]'
                        }   relative bottom-6 w-14 h-24  rounded-lg text-cyan-500  font-semibold text-xl shadow-md focus:outline  focus:outline-1 focus:outline-cyan-500/45`}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
