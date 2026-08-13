# Publication-cohort sleep-window alignment

## Summary

Publication-cohort sleep-window alignment fixes publication years and sleep-window lengths so sleeping-beauty candidates are compared over equivalent citation-exposure periods.

## Canonical Form

- Unit of analysis: publication cohort, sleep period, citation window, candidate paper, or cohort-specific denominator.
- Typical representation: cohort-by-window grid with sleep periods beginning at the publication year.
- Method target: keep sleep-depth and awakening comparisons from mixing papers with different exposure lengths.
- Empirical signature: all papers in a cohort share the same sleep interval and awakening window before candidate counts are compared.

## Uses in Science of Science

- Provides the temporal frame for [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md).
- Connects the [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md) to comparable cohort counts.
- Works with [citation-volume growth normalization](citation_volume_growth_normalization.md) when publication volume changes over time.

## Operationalization

- Select publication cohorts and sleep lengths.
- Start each sleep interval at the publication year.
- Apply the same sleep-depth thresholds within each cohort-window combination.
- Measure awakening in the same post-sleep interval for all candidates in that combination.
- Compare candidate counts only after accounting for cohort size and citing-side growth.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) scans six sleeping periods of length five through ten years.
- Each sleep period starts with a publication year, with the paper using 1988-1997 as a ten-year example.
- This design aligns sleep duration, publication cohort, and subsequent awakening period before estimating sleeping-beauty counts.

## Caveats

- Fixed cohort windows can exclude recent papers that have not had enough time to awaken.
- Older cohorts can be affected by historical database coverage.
- Cohort alignment should be paired with publication-volume normalization when comparing years.

## Links

- [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md)
- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [citation-volume growth normalization](citation_volume_growth_normalization.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [immediate post-sleep awakening window](immediate_post_sleep_awakening_window.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `publication_cohort_sleep_window_alignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: cohort-aligned sleep windows; publication-year sleep alignment; delayed-recognition cohort windowing; sleep-period cohort grid
