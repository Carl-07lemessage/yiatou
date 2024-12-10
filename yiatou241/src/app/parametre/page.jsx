
import Image from "next/image";
import { AiFillSetting } from "react-icons/ai";
import { IoStorefrontSharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { Link } from "lucide-react";



export default function Home() {
  return (
    <div className="">
      <div className="ml-0 position  relative transition-all 0.3 min-h-[100vh] pb-10">
  {/* Start Container Fluid */}
  <div className="w-full pr-[1.5rem] pl-[1.5rem] mr-auto ml-auto">
    <div className="flex flex-wrap mt-0 mr-[1.5rem] ml-[1.5rem]">
      <div className="w-full flex-auto flex-grow-0 flex-shrink-0">
        <div className="flex position relative md:flex-col min-w-0 text-[#5d7186] shadow-2xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb[1.5rem] bg-[#ffffff] bg-clip-border border-0 rounded-[0.75rem]">
          <div className="rounded-[0.75rem] border-b-[#eaedf1] border-2 mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] flex items-center font-semibold m-0 text-[#313b5e] leading-[1.1]   gap-[0.375rem]"><AiFillSetting className="text-orange-600 opacity-[1] text-[20px]"/>General Settings</h4>
          </div>
          <div className="flex-wrap-[1]   flex-grow-[1] flex-shrink-[1] flex-auto py-[1.5rem] px-[1.5rem]  ">
            <div className="flex flex-wrap mt-0 mr-[1.5rem] ml-[1.5rem]">
              <div className="position relative flex-shrink-0 w-full max-w-full pr-[1.5rem] pl-[1.5rem] mt-0 ">
                <form className="block mt-[0em]">
                  <div className="mb-3 ">
                    <label htmlFor="meta-name" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Meta Title</label>
                    <input type="text" id="meta-name" className="block w-full m-0 p-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " placeholder="Title" />
                  </div>
                </form>
              </div>
              <div className="position relative flex-shrink-0 w-full max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-3 ">
                    <label htmlFor="meta-tag" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Meta Tag Keyword</label>
                    <input type="text" id="meta-tag" className="block w-full p-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " placeholder="Enter word" />
                  </div>
                </form>
              </div>
              <div className="position relative flex-shrink-0 w-full max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-3 ">
                    <label htmlFor="themes" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Store Themes</label>
                    <select className=" cursor-pointer mb-[10px] position relative overflow-hidden text-sm block w-full p-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " id="themes" data-choices data-choices-groups data-placeholder="Select Themes">
                      <option value>Default</option>
                      <option value="Dark">Dark</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="High Contrast">High Contrast</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-shrink-0 w-full max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]"
                
                >
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="layout" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Layout</label>
                    <select className="block mb-[10px] cursor-pointer position relative overflow-hidden text-sm w-full p-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " id="layout" data-choices data-choices-groups data-placeholder="Select Layout">
                      <option className="p-[1rem]" value>Default</option>
                      <option  className="p-[1rem]" value="Electronics">Electronics</option>
                      <option  className="p-[1rem]" value="Fashion">Fashion</option>
                      <option  className="p-[1rem]" value="Dining">Dining</option>
                      <option  className="p-[1rem]" value="Interior">Interior</option>
                      <option  className="p-[1rem]" value="Home">Home</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-shrink-0  w-full max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <div className="flex flex-col">
                  <label htmlFor="description" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Description</label>
                  <textarea className="block mb-[10px] cursor-pointer position relative overflow-hidden text-sm w-full p-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " id="description" rows={4} placeholder="Type description" defaultValue={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* paramètres du magasin */}
    <div className="flex flex-wrap mr-[1.5rem] ml-[1.5rem] mt-20">
      <div className="position relative w-full flex-shrink-0 flex-grow-0 flex-auto max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
        <div className="shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-0 border-b[#eaedf1] rounded-[0.75rem] py-[1.125rem] px-[1.5rem] bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="rounded-[0.75rem] border-b-[#eaedf1] border-2 mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e] "><IoStorefrontSharp className="opacity-[1] text-[20px] text-orange-600" /> Store Settings</h4>
          </div>
          <div className="flex-1 flex-grow-1 flex-shrink-1 p-[1.5rem]">
            <div className="flex flex-wrap mt-0 mr-[1.5rem] ml-[1.5rem]">
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block"> 
                    <label htmlFor="store-name" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Store Name</label>
                    <input type="text" id="store-name" className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Enter name" />
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="owner-name" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Store Owner Full Name</label>
                    <input type="text" id="owner-name" className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Full name" />
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2">
                <div className="mb-[1.5rem] block">
                  <label htmlFor="schedule-number" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Owner Phone number</label>
                  <input type="number" id="schedule-number" name="schedule-number" className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Number" />
                </div>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2">
                <form  className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="schedule-email" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Owner Email</label>
                    <input type="email" id="schedule-email" name="schedule-email" className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Email" />
                  </div>
                </form>
              </div>
              {/* full address */}
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-full max-w-full pr-[1.5rem] pl-[1.5rem] m-0 block">
                <div className="mb-[1.5rem] block">
                  <label htmlFor="address" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Full Address</label>
                  <textarea className="min-h-[1px] bg-[#fcfcfd] block w-full pt-[0.5rem] pb-[0.5rem] pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] resize-y m-0" id="address" rows={3} placeholder="Type address" defaultValue={""} />
                </div>
              </div>
              {/* zip code  */}
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/3 max-w-full  pr-[1.5rem] pl-[1.5rem] m-0 block">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="your-zipcode" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Zip-Code</label>
                    <input type="number" id="your-zipcode" className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="zip-code" />
                  </div>
                </form>
              </div>
              {/* city */}
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/3 max-w-full  pr-[1.5rem] pl-[1.5rem] m-0 block">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-city" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">City</label>
                    <select className="cursor-pointer m-0 position relative overflow-hidden text-[16px] block" data-choices data-choices-groups data-placeholder="Select City" name="choices-city">
                      <option value>Choose a city</option>
                      <optgroup label="UK">
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                      </optgroup>
                      <optgroup label="FR">
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                      </optgroup>
                      <optgroup label="DE" disabled>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Munich">Munich</option>
                        <option value="Berlin">Berlin</option>
                      </optgroup>
                      <optgroup label="US">
                        <option value="New York">New York</option>
                        <option value="Washington" disabled>
                          Washington
                        </option>
                        <option value="Michigan">Michigan</option>
                      </optgroup>
                      <optgroup label="SP">
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Malaga">Malaga</option>
                      </optgroup>
                      <optgroup label="CA">
                        <option value="Montreal">Montreal</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/3">
                <form className="block mt-[0em]">
                  <label htmlFor="choices-country" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Country</label>
                  <select className="cursor-pointer m-0 position relative overflow-hidden text-[16px] block" id="choices-country" data-choices data-choices-groups data-placeholder="Select Country" name="choices-country">
                    <option value>Choose a country</option>
                    <optgroup label>
                      <option value>United Kingdom</option>
                      <option value="Fran">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="U.S.A">U.S.A</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Germany">Germany</option>
                      <option value="Spain">Spain</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                    </optgroup>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* paramètre de Localization */}
    <div className="flex flex-wrap mt-0 mr-[1.5rem] ml-[1.5rem]">
      <div className="position relative w-full flex-shrink-0 flex-grow-0 flex-auto max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
        <div className="shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-0 border-b[#eaedf1] rounded-[0.75rem] py-[1.125rem] px-[1.5rem] bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="rounded-[0.75rem]  border-b-[#eaedf1] border-2 mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><ImLocation className="opacity-[1] text-[20px] text-orange-600"/>Localization Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <div className="flex flex-wrap mt-0 mr-[1.5rem] ml-[1.5rem]">
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form  className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-country1" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Country</label>
                    <select className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-country1" data-choices data-choices-groups data-placeholder="Select Country" name="choices-country">
                      <option value>Choose a country</option>
                      <optgroup label>
                        <option value>United Kingdom</option>
                        <option value="Fran">France</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="U.S.A">U.S.A</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                        <option value="Germany">Germany</option>
                        <option value="Spain">Spain</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form  className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-language" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Language</label>
                    <select className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-language" data-choices data-choices-groups data-placeholder="Select language" name="choices-language">
                      <option value>English</option>
                      <optgroup label>
                        <option value>Russian</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Turkish">Turkish</option>
                        <option value="German">German</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Italian">Italian</option>
                        <option value="Catalán">Catalán</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Japanese">Japanese</option>
                        <option value="French">French</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-currency" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Currency</label>
                    <select className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-currency" data-choices data-choices-groups data-placeholder="Select Currency" name="choices-currency">
                      <option value>Us Dollar</option>
                      <optgroup label>
                        <option value>Pound</option>
                        <option value="Indian Rupee">Indian Rupee</option>
                        <option value="Euro">Euro</option>
                        <option value="Australian Dollar">Australian Dollar</option>
                        <option value="Japanese Yen">Japanese Yen</option>
                        <option value="Korean Won">Korean Won</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-length" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Length Class</label>
                    <select className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-length" data-choices data-choices-groups data-placeholder="Select Length" name="choices-length">
                      <option value>Centimeter</option>
                      <optgroup label>
                        <option value>Millimeter</option>
                        <option value="Inch">Inch</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/2 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form>
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-weight" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Weight Class</label>
                    <select className="block order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-weight" data-choices data-choices-groups data-placeholder="Select Weight" name="choices-weight">
                      <option value>Kilogram</option>
                      <optgroup label>
                        <option value>Gram</option>
                        <option value="Pound">Pound</option>
                        <option value="Ounce">Ounce</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* catégories des paramètres */}
    <div className="flex flex-wrap mt-0 mr-[1.5rem] ml-[1.5rem]">
      <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/4 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
        <div className="shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-0 border-b[#eaedf1] rounded-[0.75rem] py-[1.125rem] px-[1.5rem] bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="rounded-[0.75rem]  border-b-[#eaedf1] border-2 mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><GiCardboardBoxClosed className="opacity-[1] text-[20px] text-orange-600"/> Categories Settings</h4>
          </div>
          {/* Category Product Count */}
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <p>Category Product Count </p>
            <div className="flex gap-3 items-center mb-6">
              <div className="block min-h-[1.612em] mb-0">
                <input className="cursor-pointer text-[#ff6c2f]  border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal " type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px]  leading-normal text-inherit" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{border:"rgba(0, 0, 0, 0.175)"}} />
                <label className="cursor-pointer font-medium inline-block " htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
            <form className="block mt-[0em] isolate">
              <div className="mb-[0.375rem] pb-[0.375rem] block isolate">
                <label htmlFor="mb-[0.4rem] text-[0.875rem] text-[#5d7186] cursor-default inline-block" className="form-label">Default Items Per Page</label>
                <input type="number" id="items-par-page" className="block w-full pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} />
              </div>
            </form>
          </div>
        </div>
      </div>
    
      {/* Allow Reviews */}
      <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/4 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
        <div className="shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-0 border-b[#eaedf1] rounded-[0.75rem] py-[1.125rem] px-[1.5rem] bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="rounded-[0.75rem]  border-b-[#eaedf1] border-2 mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><iconify-icon icon="solar:chat-square-check-bold-duotone" className="text-primary fs-20" />Reviews Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <p>Allow Reviews </p>
            <div className="flex gap-3 items-center box-center isolate mb-6">
              <div className="block min-h-[1.612em] isolate mb-0">
                <input className=" forced-color-adjust-auto cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] text-white w-[1.112em] bg-local field m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-inherit" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" defaultChecked />
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault3">
                  Yes
                </label>
              </div>
              <div className="block min-h-[1.612em] isolate mb-0 ">
                <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0 " type="radio" name="flexRadioDefault2" id="flexRadioDefault4" style={{border:'rgba(0, 0, 0, 0.175)'}} />
                <label className="cursor-pointer font-medium inline-block+
                " htmlFor="flexRadioDefault4">
                  No
                </label>
              </div>
            </div>
            <p className="mt-3 pt-1">Allow Guest Reviews </p>
            <div className="d-flex gap-2 align-items-center mb-2">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault5" />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault6" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault6">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Vouchers Settings */}
      <div className="position relative flex-grow-0 flex-shrink-0 flex-auto w-1/4 max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
        <div className="shadow shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] space-y-[1.5rem] space-x-[1.5rem] decoration-[#313b5e] border-0 border-[#eaedf1] m-[0.75rem] rounded-[0.75rem] py-[1.125rem] position relative flex flex-col min-w-0 break-words bg-white bg-clip-border isolate  px-[1.5rem] bg-[#00000000]">
          <div className="rounded-[0.75rem] mt-0 border-b-[#eaedf1] border-[1px] py-[1.125rem] px-[1.5rem] mb-0 bg-[#00000000] block isolate">
            <h4 className="text-[1rem] font-semibold m-0 gap-[0.375rem items-center flex] decoration-[#313b5e]"><iconify-icon icon="solar:ticket-bold-duotone" className="text-[20px] opacity-[1] text-orange-600" />Vouchers Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <form className="block mt-[0em] isolate">
              <div className="mb-[1.5rem] block isolate">
                <label htmlFor="min-vouchers" className="mb-[0.4rem] text-[0.875rem] decoration-[#5d7186] font-medium inline-block cursor-default">Minimum Vouchers</label>
                <input type="number" id="min-vouchers" className="block w-full pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} defaultValue={1} />
              </div>
            </form>
            <form>
              <div className="mb-[1.5rem] block isolate">
                <label htmlFor="mex-vouchers" className="mb-[0.4rem] text-[0.875rem] decoration-[#5d7186] font-medium inline-block cursor-default">Maximum Vouchers</label>
                <input type="number" id="mex-vouchers" className="block w-full pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} defaultValue={12} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title d-flex align-items-center gap-1"><iconify-icon icon="solar:ticket-sale-bold-duotone" className="text-primary fs-20" />Tax Settings</h4>
          </div>
          <div className="card-body">
            <p>Prices with Tax</p>
            <div className="d-flex gap-2 align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault7" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault7">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault8" />
                <label className="form-check-label" htmlFor="flexRadioDefault8">
                  No
                </label>
              </div>
            </div>
            <form>
              <div className="mb-1 pb-1">
                <label htmlFor="items-tax" className="form-label">Default Tax Rate</label>
                <input type="text" id="items-tax" className="form-control" placeholder={1000} defaultValue="18%" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* fin Vouchers Settings */}
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title d-flex align-items-center gap-1"><iconify-icon icon="solar:users-group-two-rounded-bold-duotone" className="text-primary fs-20" />Customers Settings</h4>
          </div>
          <div className="card-body">
            <div className="row justify-content-between g-3">
              <div className="col-lg-2 border-end">
                <p>Customers Online</p>
                <div className="d-flex gap-2 align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault9" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault9">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault10" />
                    <label className="form-check-label" htmlFor="flexRadioDefault10">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 border-end">
                <p>Customers Activity</p>
                <div className="d-flex gap-2 align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault11" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault11">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault12" />
                    <label className="form-check-label" htmlFor="flexRadioDefault12">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 border-end">
                <p>Customer Searches</p>
                <div className="d-flex gap-2 align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault13" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault13">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault14" />
                    <label className="form-check-label" htmlFor="flexRadioDefault14">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 border-end">
                <p>Allow Guest Checkout</p>
                <div className="d-flex gap-2 align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault15" />
                    <label className="form-check-label" htmlFor="flexRadioDefault15">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault16" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault16">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <p>Login Display Price</p>
                <div className="d-flex gap-2 align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault17" />
                    <label className="form-check-label" htmlFor="flexRadioDefault17">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault18" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault18">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <form>
                  <div className>
                    <label htmlFor="login-attempts" className="form-label">Max Login Attempts</label>
                    <input type="text" id="login-attempts" className="form-control" placeholder="max" defaultValue="1 hour" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-right block isolate">
      <Link href="#!" className="text-white bg-[#ef5f5f] leading-[1.5] py-[0.5rem] px-[1rem] inline-block shadow-lg disabled:opacity-[0.65] focus:shadow-[241, 119, 119] border-[1px] border-[#ef5f5f] rounder-[1px] rounded-[#ef5f5f] shadow-[0px 2px 6px 0px] cursor-pointer select-none  text-[ 0.875rem] font-normal border-[1px] px-[1rem] py-[0.5rem] border-[#ef5f5f] hover:text-white disabled:text-white disabled:bg-[#ef5f5f] disabled:border-[#ef5f5f] hover:bg-[#d75656] shadow shadow-[241, 119, 119] active:text-white active:bg-[#bf4c4c] active:border-[#b34747] active:shadow inset-[0 3px 5px rgba(0, 0, 0, 0.125)]">Cancel</Link>
      <Link href="#!" className="btn btn-success">Save Change</Link>
    </div>
  </div>  
</div>

    </div>
  );
}
