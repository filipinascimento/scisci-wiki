# ISI 1981 citation-distribution cohort

## Summary

The ISI 1981 citation-distribution cohort is a large paper-level citation-count cohort of publications indexed by the Institute for Scientific Information, used by Redner to estimate the full citation distribution and its sparse high-impact tail.

## Canonical Form

- Unit of analysis: paper, citation count, publication cohort, database snapshot, or citation threshold bin.
- Typical representation: one publication-year cohort with lifetime-to-date received citation counts.
- Data target: paper-level citation distribution across a large indexed corpus, including uncited papers, low-citation papers, and extreme high-citation papers.
- Empirical signature: a very large denominator reveals both a large uncited mass and a tiny but measurable extreme-citation tail.

## Uses in Science of Science

- Supplies a classic empirical substrate for [citation distribution scaling](../measures/citation_distribution_scaling.md), [citation threshold profile](../measures/citation_threshold_profile.md), and [uncited-paper mass](../measures/uncited_paper_mass.md).
- Provides the large sample needed for [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md) and [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md).
- Makes [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md) concrete by reporting the number of papers above high-citation thresholds.
- Anchors historical [citation data census dates](../methods/citation_data_census_dates.md), because counts were observed at a specific citation snapshot rather than as final lifetime totals.
- Complements [Web of Science](web_of_science.md) as a bounded historical ISI cohort rather than a generic citation-index description.

## Operationalization

- Select papers published in 1981 in journals catalogued by the Institute for Scientific Information.
- Count citations received by those papers from publication through the stated citation-data census date.
- Preserve uncited papers and low-citation papers so the lower tail is not lost.
- Report threshold counts, rank-ordered citation counts, and candidate distributional fits.
- Record database provenance, publication year, citation-count date, and whether non-journal or non-indexed materials are excluded.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) analyzes 783,339 papers published in 1981 in ISI-catalogued journals.
- The same full text reports 6,716,198 citations to that cohort as counted from 1981 through June 1997.
- Redner uses the cohort to show that 368,110 papers were uncited, 633,391 received 10 or fewer citations, and only 64 exceeded 1,000 citations.
- The cohort's large size lets Redner argue that the highest-ranked ISI papers extend deeper into the asymptotic tail than the smaller Physical Review D panel.

## Caveats

- The cohort is historically bounded and should not be treated as current Web of Science coverage.
- Citation counts are snapshot-dependent; later extracts would change counts and possibly threshold memberships.
- The source is broad but still selective, inheriting ISI journal coverage and document-type decisions.
- Field mixture can affect the observed distribution unless field-normalized or stratified.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [citation threshold profile](../measures/citation_threshold_profile.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)
- [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md)
- [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [Web of Science](web_of_science.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `isi_1981_citation_distribution_cohort`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: ISI 1981 citation cohort; 1981 ISI paper citation panel; Redner ISI citation cohort; ISI citation distribution data
