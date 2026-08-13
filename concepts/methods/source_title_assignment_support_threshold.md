# Source-title assignment support threshold

## Summary

Source-title assignment support threshold requires a minimum amount of citation evidence before assigning a new journal or source title to an existing science-map subdiscipline.

## Canonical Form

- Unit of analysis: new source title, journal, subdiscipline, citation count, or assignment threshold.
- Typical representation: minimum citation or reference count required before a source title can be assigned.
- Method target: avoid unstable map updates based on too little evidence.
- Empirical signature: journals without enough links to a subdiscipline are withheld or treated cautiously.

## Uses in Science of Science

- Adds an evidence gate to [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md).
- Supports stable [science map update workflows](science_map_update_workflows.md).
- Connects [science-map source-title spine](../datasets/science_map_source_title_spine.md) to defensible classification updates.

## Operationalization

- Identify source titles absent from the existing map.
- Count how often each new source references each existing subdiscipline or is cited by it.
- Assign the source to the top subdiscipline only when support exceeds a minimum threshold.
- Record unassigned, ambiguous, or low-evidence cases separately.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) describes assigning new Scopus journals to the category they referenced most.
- The update required that the new journal cite articles within that cluster at least ten times.
- This threshold limits assignment of new source titles when citation evidence is weak.

## Caveats

- A fixed threshold can be too strict for small but important journals.
- Thresholds may need to differ across databases, fields, or time periods.
- Citation support is not the same as topical fit.

## Links

- [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md)
- [science map update workflows](science_map_update_workflows.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [field classifications](../measures/field_classifications.md)
- [general-purpose map assignment tradeoff](../validations/general_purpose_map_assignment_tradeoff.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; SciSciNet: W2036137014; WoS: unknown]

## Metadata

- Concept ID: `source_title_assignment_support_threshold`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: journal assignment support threshold; source-title evidence gate; minimum citation assignment rule; map-update source-title threshold
