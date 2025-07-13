module Jekyll
  module AgeFilter
    def age_from_birthdate(birthdate)
      return nil if birthdate.nil?
      
      begin
        # Handle both string and Date objects
        birth_date = birthdate.is_a?(Date) ? birthdate : Date.parse(birthdate.to_s)
        today = Date.today
        
        age = today.year - birth_date.year
        age -= 1 if today.month < birth_date.month || (today.month == birth_date.month && today.day < birth_date.day)
        
        age
      rescue
        nil
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AgeFilter)