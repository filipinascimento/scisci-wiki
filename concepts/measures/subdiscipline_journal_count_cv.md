# Subdiscipline journal-count coefficient of variation

## Summary

Subdiscipline journal-count coefficient of variation measures how evenly journals are distributed across a science map's subdiscipline classes.

## Canonical Form

- Unit of analysis: subdiscipline, journal count, source-title count, map version, or coefficient of variation.
- Typical representation: normalized dispersion of journal counts across subdisciplines.
- Measurement target: quantify balance in a journal-based science classification.
- Empirical signature: lower coefficient of variation indicates a more even distribution of journals across subdisciplines.

## Uses in Science of Science

- Adds a compact balance measure to [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md).
- Relates map class balance to [distributional balance](distributional_balance.md).
- Helps compare versions of [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md).

## Operationalization

- Count journals assigned to each subdiscipline in a map version.
- Compute the coefficient of variation across subdiscipline counts.
- Compare the value across original and updated maps.
- Interpret alongside coverage, accuracy, and assignment rules.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) compares the original and updated UCSD maps by the distribution of journals over 554 subdisciplines and 13 disciplines.
- The paper reports that the updated map produced a more even journal distribution using the coefficient of variation.
- This measure supports evaluation of map updates beyond raw coverage expansion.

## Caveats

- Equal journal counts are not always desirable because fields differ in output and source-title structure.
- The measure depends on whether journals are single- or fractionally assigned.
- Balance should not be optimized at the expense of local and global map accuracy.

## Links

- [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md)
- [distributional balance](distributional_balance.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [general-purpose map assignment tradeoff](../validations/general_purpose_map_assignment_tradeoff.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; SciSciNet: W2036137014; WoS: unknown]

## Metadata

- Concept ID: `subdiscipline_journal_count_cv`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: journal-count CV; subdiscipline balance coefficient; science-map class balance; source-title dispersion measure
