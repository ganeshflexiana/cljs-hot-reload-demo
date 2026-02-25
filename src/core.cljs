(ns core
  (:require
   [reagent.core :as r]
   [reagent.dom.client :as rdom]))

(defonce state
  (r/atom {:theme :light
           :color 180
           :time  (js/Date.)}))

(defonce root (atom nil))

(js/setInterval
 #(swap! state assoc :time (js/Date.))
 1000)

(defn theme-toggle []
  [:button
   {:style {:margin-bottom "12px"}
    :on-click #(swap! state update :theme
                      (fn [t] (if (= t :light) :dark :light)))}
   "Toggle Theme"])

(defn color-slider []
  [:input
   {:type "range"
    :min 0
    :max 360
    :value (:color @state)
    :on-change #(swap! state assoc
                       :color (-> % .-target .-value js/parseInt))}])

(defn app []
  (let [{:keys [theme color time]} @state]
    [:div
     {:style {:height "100vh"
              :padding "40px"
              :background (if (= theme :dark) "#0f172a" "#f8fafc")
              :color (if (= theme :dark) "#e5e7eb" "#0f172a")
              :font-family "sans-serif"}}

     [:h1 {:style {:color "red"}} "ClojureScript Hot Reload using Shadow-cljs"]
     [:h2 {:style {:color "green"}} "Header 2"]
     [:h2 "Header 3"]
     [theme-toggle]
     [:p "Current time: " (.toLocaleTimeString time)]
     [:p "Change text color"]
     [color-slider]
     [:h2 {:style {:color (str "hsl(" color ",70%,50%)")}}
      "This UI updates instantly ✨"]]))

(defn ^:dev/after-load  init []
  (when-not @root
    (reset! root
            (rdom/create-root
             (.getElementById js/document "app"))))
  (rdom/render @root [app]))
