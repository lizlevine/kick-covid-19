import React from "react";

const Faq = () => (
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
      <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
        New York Covid-19 Resources
      </h2>
      <div class="mt-6 border-t-2 border-gray-100 pt-10">
        <dl class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Where can I volunteer?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Are you a qualified health, mental health or related
                  professional? Consider volunteering to support the State’s
                  COVID response. Check out this{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="https://coronavirus.health.ny.gov/get-involved-how-you-can-help"
                  >
                    Link
                  </a>{" "}
                  for more information
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                What to do if you are stressed out due to the prevelance of
                COVID-19 in New York?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  These difficult times can induce anxiety. Thankfully there are
                  resources out there that can give tips on this. Click{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="https://omh.ny.gov/omhweb/guidance/covid-19-managing-stress-anxiety.pdf"
                  >
                    Here
                  </a>{" "}
                  for a PDF on how you can try to manage your anxiety
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                How to cope with isolation and loneliness during quarantine
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Being quarantined from friends and family is difficult.{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="https://www.nami.org/Find-Support/Discussion-Groups"
                  >
                    NAMI
                  </a>{" "}
                  hosts discussion groups and{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="http://www.emotionsanonymous.org/"
                  >
                    Emotions Anonymous
                  </a>{" "}
                  has groups focusing on emotional well-being
                </p>
              </dd>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                If you think that you have COVID-19
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  New testing facilities are opening.{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="https://www.governor.ny.gov/news/amid-ongoing-covid-19-pandemic-governor-cuomo-announces-five-new-covid-19-testing-facilities"
                  >
                    Find testing site locations and hours or operation.
                  </a>{" "}
                  Testing is free for all eligible New Yorkers as ordered by a
                  health care provider
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                How to sell products to NYS due to shortages of gloves, masks,
                and gowns
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  There is a shortage of personal protective equipment. The
                  Governor is asking providers to sell these products to the
                  state within this{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="https://www.governor.ny.gov/content/procurement-form"
                  >
                    Procurement Form
                  </a>
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Have you recently recovered from COVID-19?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  New Yorkers who have recovered from COVID are encouraged to
                  donate blood. Here's{" "}
                  <a
                    class="text-purple-500 hover:text-blue-800"
                    href="https://nybc.org/donate-blood/convalescent-plasma-covid-19-donor-request-form/"
                  >
                    information on how to donate
                  </a>
                </p>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
);

export default Faq;
