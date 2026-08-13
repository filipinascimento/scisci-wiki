# Citation-volume growth normalization

## Summary

Citation-volume growth normalization adjusts delayed-recognition counts for changes in the number of papers available to be cited and to cite.

## Canonical Form

- Unit of analysis: publication-year cohort, citing-year cohort, citation-event opportunity, or normalized candidate count.
- Typical representation: cohort-adjusted sleeping-beauty counts, cited-side and citing-side growth factors, or normalized citation-history frequencies.
- Method target: compare rare citation trajectories across years when the publication system is growing.
- Empirical signature: raw counts are rescaled because later cohorts have more papers and more potential citing articles.

## Uses in Science of Science

- Prevents [sleeping-beauty threshold grids](sleeping_beauty_threshold_grid.md) from mistaking database growth for higher awakening probability.
- Generalizes to citation-history studies where both exposure and opportunity change over time.
- Complements [citation data census dates](citation_data_census_dates.md) and [scholarly snapshot versioning](scholarly_snapshot_versioning.md).
- Helps separate real delayed recognition from growth-driven citation inflation.
- Also supports post-peak attention studies when half-life is rescaled by the number of new papers entering a field.

## Operationalization

- Record the number of publications in each cited cohort.
- Record the size of later citing cohorts or citation-opportunity windows.
- Normalize candidate counts before comparing sleep lengths, publication years, or awakening windows.
- Report whether self-citations, document types, and database coverage changes were excluded or adjusted.
- Preserve the source-corpus scope, because [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md) and later WoS/OpenAlex/Dimensions snapshots can expose different citing and cited populations.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) notes that the CWTS data system grows from 656,991 publications in 1980 to 1,046,839 in 2000.
- van Raan states that more publications in a given year raise the chance of sleeping beauties on the cited side.
- The paper also states that more later publications raise the chance that earlier papers will be cited on the citing side.
- The study therefore normalizes measured sleeping-beauty counts for growth in both cited and citing publications before fitting the awakening relation.
- This normalization supports [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md), where rare-candidate counts are interpreted relative to annual publication denominators.
- Verified full-text evidence from Parolo et al. (2015) applies the same growth-normalization logic to citation aging rather than delayed recognition counts.
- Parolo et al. convert paper half-life from calendar years into the cumulative number of field publications appearing between peak attention and half-life.
- The resulting [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md) is comparatively stable over time, supporting the [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md) interpretation.

## Caveats

- Publication-count normalization does not by itself adjust for field composition, database coverage changes, or reference-list length.
- Citation-opportunity adjustment should be documented before comparing distant historical periods.
- Normalization choices can change the apparent rarity of extreme delayed-recognition cases.

## Links

- [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md)
- [awakening probability function](../measures/awakening_probability_function.md)
- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [citation data census dates](citation_data_census_dates.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [citation window selection](citation_window_selection.md)
- [publication-rate normalized rank](../measures/publication_rate_normalized_rank.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]
- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_volume_growth_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: cited-citing growth adjustment; publication growth normalization; citation opportunity normalization; cohort citation-volume adjustment; publication-volume attention-time normalization
