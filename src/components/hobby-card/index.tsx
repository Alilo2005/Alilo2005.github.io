import { skeleton } from '../../utils';

const HobbyCard = ({
  loading,
  hobbies,
}: {
  loading: boolean;
  hobbies: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 6; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  const getHobbyIcon = (hobby: string) => {
    const lowercaseHobby = hobby.toLowerCase();
    if (lowercaseHobby.includes('writing')) return '✍️';
    if (lowercaseHobby.includes('gaming')) return '🎮';
    if (lowercaseHobby.includes('reading')) return '📚';
    if (lowercaseHobby.includes('music')) return '🎵';
    if (lowercaseHobby.includes('sport') || lowercaseHobby.includes('fitness')) return '⚽';
    if (lowercaseHobby.includes('travel')) return '✈️';
    if (lowercaseHobby.includes('cooking')) return '👨‍🍳';
    if (lowercaseHobby.includes('photo')) return '📸';
    return '🎯';
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Hobbies</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {loading
              ? renderSkeleton()
              : hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    <span className="mr-2">{getHobbyIcon(hobby)}</span>
                    {hobby}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;