import './Stat.css';

export default function Stat({data, listMonth}){
    const max = Math.max(...data);

    return (
        <div className="stat_container">
            {
                listMonth.map((value, index) => {

                    if (max === 0){
                        return <div className="stat_month" key={index}>
                            <div className="stat_progress"></div>
                            <div className="stat_title">{value}</div>
                        </div>
                    }else{
                        return <div className="stat_month" key={index}>
                            <div className="stat_progress">
                                <span style={{height: `${data[index] / max * 100}%`}} className="stat_bar"></span>
                            </div>
                            <div className="stat_title">{value}</div>
                        </div>
                    }
                })
            }
        </div>
    );
}