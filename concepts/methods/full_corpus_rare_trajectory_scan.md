# Full-corpus rare-trajectory scan

## Summary

Full-corpus rare-trajectory scan searches an entire bibliometric corpus for rare citation-history shapes rather than sampling a small set of famous examples.

## Canonical Form

- Unit of analysis: paper, citation trajectory, corpus, threshold combination, or rare candidate set.
- Typical representation: exhaustive scan across all eligible papers and threshold classes.
- Method target: estimate the prevalence and distribution of rare trajectory types such as sleeping beauties.
- Empirical signature: candidate counts are reported against a large corpus denominator.

## Uses in Science of Science

- Grounds [sleeping-beauty detection](sleeping_beauty_detection.md) in population-level search.
- Turns the [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md) into an empirical denominator for rarity claims.
- Supports [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md) by avoiding anecdote-only cases.

## Operationalization

- Assemble citation histories for all papers in the target corpus and years.
- Apply sleep-depth, sleep-length, and awakening-intensity thresholds to each eligible paper.
- Count candidates for each threshold combination.
- Report computational scale, corpus coverage, and denominator sizes.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) uses a CWTS system with about 20 million articles and 300 million citations.
- The paper reports about 500 million citation analyses over combinations of sleep duration, sleep depth, and awakening intensity.
- This exhaustive strategy enables population-level estimates of extreme delayed-recognition rarity.

## Caveats

- Full-corpus scans inherit database coverage and citation-indexing limits.
- Threshold scans can still miss trajectory shapes outside the grid.
- Large-scale counts need normalization for cited and citing publication growth.

## Links

- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md)
- [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md)
- [citation-volume growth normalization](citation_volume_growth_normalization.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `full_corpus_rare_trajectory_scan`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: exhaustive delayed-recognition scan; rare citation-trajectory census; full-corpus sleeping-beauty search; population rare-trajectory screening
