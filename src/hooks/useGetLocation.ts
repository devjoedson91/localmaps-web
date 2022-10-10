import {useState, useEffect} from 'react';

export default function useGeoLocation() {

    const defaultCoords = [-23.55052, -46.633308];
    const [coords, setCoords] = useState<number[] | null>(null);

    useEffect(() => {

        function onSuccess(position: GeolocationPosition) {
            setCoords([position.coords.latitude, position.coords.longitude]);
        }
        function onError() {
            console.log('error on get location');
            setCoords(defaultCoords);
        }

        try {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } catch(err) {
            setCoords(defaultCoords);
        }

    }, []);

    return {coords};

}