# Inventor birthdate matching panel

## Summary

Inventor birthdate matching panel links patent inventors to public birth-date records using names and ZIP codes, enabling age-at-first-invention analyses within a selected inventor subset.

## Canonical Form

- Unit of analysis: inventor, patent inventor address, name-ZIP query, public-record birth date, or matched age subset.
- Typical representation: inventor identifier, first observed application year, birth year or birth date, age at first observed invention, match status, and selection flags.
- Data target: recover inventor ages when patent data do not include dates of birth.
- Empirical signature: a matched subset supports age-based career-entry analyses but requires explicit selection checks.

## Uses in Science of Science

- Provides the data layer for [age at first invention](../measures/age_at_first_invention.md).
- Supports tests of [burden of knowledge](../mechanisms/burden_of_knowledge.md) that require inventor age rather than publication-career age.
- Complements [patent application-year time anchor](../methods/patent_application_year_time_anchor.md) by combining filing dates with inferred birth dates.
- Highlights selection and privacy issues in individual-level scholarly and inventor data linkage.

## Operationalization

- Start from patent inventor records with names and ZIP codes.
- Query a public-record or administrative source that returns birth-date matches for a name-ZIP combination.
- Keep unique matches and record unmatched, ambiguous, and missing-ZIP cases.
- Compute age at first observed patent application after applying left-truncation restrictions.
- Compare matched and unmatched inventors on observable patent characteristics to assess selection.
- Store only the minimum fields needed for analysis when the source contains personally identifying information.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) reports that inventor dates of birth are not available in the patent data or from the USPTO generally.
- Jones uses inventor name and ZIP code information to query AnyBirthday.com, a public-record website that contained birth-date information for 135 million Americans.
- Of 224,152 inventors with ZIP-code information, the matching process produced a unique match in 56,281 cases.
- Jones explicitly warns that the age subset is not a random sample of the overall innovator population.
- The paper mitigates the selection concern by comparing observables, controlling for them in age regressions, and checking that team-size and specialization results persist in the age subset.

## Caveats

- Public-record matching can be nonrandom by geography, name frequency, age, address quality, and data-source coverage.
- Unique name-ZIP matches can still be wrong, especially for common names or shared addresses.
- Date-of-birth linkage raises privacy and data-governance concerns.
- The panel measures first observed invention only after patent-data truncation rules are applied.

## Links

- [age at first invention](../measures/age_at_first_invention.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [inventor application time lag](../measures/inventor_application_time_lag.md)
- [patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [author name disambiguation](../methods/author_name_blocking.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `inventor_birthdate_matching_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: inventor age subset; AnyBirthday inventor match; patent inventor birth-date panel; name-ZIP birthdate matching
