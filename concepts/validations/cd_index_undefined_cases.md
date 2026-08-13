# CD-index undefined cases

## Summary

CD-index undefined cases occur when neither a focal work nor its predecessors receive later citations in the selected measurement window, making disruption and consolidation direction unobservable.

## Canonical Form

- Unit of analysis: focal paper or patent, predecessor set, future citation window, or CD-index denominator.
- Typical representation: zero future-citation neighborhood, missing `CDt` or `mCDt`, imputed-zero robustness check, or exclusion flag.
- Validation target: document whether undefined disruption scores are rare, systematic, or consequential for downstream analyses.
- Empirical signature: models are stable when undefined values are excluded or set to a neutral value with an imputation indicator.

## Uses in Science of Science

- Adds a missing-data and boundary-condition layer to [disruption index](../measures/disruption_index.md) and [modified CD index](../measures/modified_cd_index.md).
- Helps users distinguish a truly neutral disruption score from an unobserved future citation neighborhood.
- Supports responsible use of [CD-index time windows](../measures/cd_index_time_windows.md), especially for recent papers and patents with limited follow-up.
- Links disruption analysis to broader [citation window selection](../methods/citation_window_selection.md) and coverage caveats.

## Operationalization

- For each focal work, identify later works that cite either the focal work or its predecessors within the selected window.
- Mark `CDt` and `mCDt` as undefined when that future neighborhood is empty.
- Report the share of undefined cases by cohort, field, document type, and citation window.
- Run sensitivity checks excluding undefined cases and imputing them to zero with an explicit indicator.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) states that `CDt` and `mCDt` are undefined when neither a focal patent nor its technological predecessors receive future citations during the measurement interval.
- In their U.S. utility patent data, five-year undefined values occur in 82,572 of 2.9 million cases, or about 2.8%.
- The paper reruns patent-level models after setting undefined `CD5` and `mCD5` values to zero and adding an imputation indicator.
- Funk and Owen-Smith report that these robustness models are nearly identical to their preferred specifications.

## Caveats

- Undefined is not the same as non-disruptive; it means the selected network window lacks enough future citation evidence.
- Recent cohorts, narrow corpora, low-citation fields, and incomplete reference coverage can inflate undefined rates.
- Imputing zero can be useful for robustness but should not erase the distinction between neutral and unobserved.

## Links

- [disruption index](../measures/disruption_index.md)
- [modified CD index](../measures/modified_cd_index.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [citation window selection](../methods/citation_window_selection.md)
- [disruption measure validation](disruption_measure_validation.md)
- [patent disruption face-validity cases](patent_disruption_face_validity_cases.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown; SciSciNet: W2303284028]

## Metadata

- Concept ID: `cd_index_undefined_cases`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: undefined CDt cases; no-future-citation CD index; CD missingness check; disruption score imputation
