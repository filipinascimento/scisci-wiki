# Sleeping-beauty field-journal stratification

## Summary

Sleeping-beauty field-journal stratification tests whether delayed-recognition rates vary across fields, journals, and journal types rather than appearing uniformly across science.

## Canonical Form

- Unit of analysis: field, journal, journal type, publication-year cohort, sleeping-beauty candidate, or citation trajectory.
- Typical representation: field-by-threshold table, journal-type stratification, or interaction between source venue and awakening probability.
- Validation target: determine whether sleeping-beauty estimates are robust to disciplinary and venue composition.
- Empirical signature: sleeping-beauty prevalence or awakening intensity differs after stratifying by field or journal class.

## Uses in Science of Science

- Extends [sleeping-beauty threshold grids](../methods/sleeping_beauty_threshold_grid.md) beyond pooled science-wide counts.
- Complements [sleeping-beauty field-origin profile](../measures/sleeping_beauty_field_origin_profile.md) from later Ke et al. evidence.
- Connects delayed-recognition work to [field classifications](../measures/field_classifications.md), [single-journal publication-assignment audit](single_journal_publication_assignment_audit.md), and [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Helps avoid treating [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md) totals as portable across domains without stratified checks.

## Operationalization

- Assign candidate papers to fields, journals, and journal types using the source database's classification and, when possible, article-level topics.
- Recompute sleep-depth, sleep-length, awakening-intensity, and population-rarity measures within each stratum.
- Compare field-normalized rates and extreme-case counts against pooled estimates.
- Audit whether multidisciplinary journals need article-level field assignment rather than journal-level categories.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) concludes that further work is needed to analyze sleeping-beauty statistics for different fields.
- The same conclusion calls for studying the possible influence of specific types of journals.
- This makes field and journal stratification an explicit suggested experiment in the original sleeping-beauty measurement program.
- Later Ke et al. (2015) evidence supplies a broader field-origin profile, but van Raan identifies the stratification need at the threshold-grid stage.

## Caveats

- Field and journal strata can be small for extreme sleeping-beauty thresholds.
- Journal-level field assignment can misclassify multidisciplinary or boundary-crossing papers.
- Differences by field or journal can reflect citation-density, indexing, and reference-list norms as well as real delayed recognition.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [sleeping-beauty field-origin profile](../measures/sleeping_beauty_field_origin_profile.md)
- [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md)
- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [field classifications](../measures/field_classifications.md)
- [single-journal publication-assignment audit](single_journal_publication_assignment_audit.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_field_journal_stratification`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: field-stratified sleeping beauties; journal-type sleeping-beauty audit; delayed-recognition field stratification; venue-stratified awakening check
