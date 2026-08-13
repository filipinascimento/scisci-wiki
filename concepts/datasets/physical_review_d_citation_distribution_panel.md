# Physical Review D citation-distribution panel

## Summary

The Physical Review D citation-distribution panel is Redner's journal-bounded citation-count panel for Physical Review D papers, used to compare citation distributions, rank plots, cohort age, and annual higher moments.

## Canonical Form

- Unit of analysis: Physical Review D paper, publication volume, publication year, citation count, or annual cohort.
- Typical representation: journal-specific paper citation-count panel with annual moments and top-paper counts.
- Data target: a field- and venue-bounded citation distribution for high-energy physics and related Physical Review D publications.
- Empirical signature: older and newer PRD cohorts have similar low-citation ranges but divergent high-citation tails because highly cited papers continue accumulating citations.

## Uses in Science of Science

- Provides a bounded comparison panel for [citation distribution scaling](../measures/citation_distribution_scaling.md) and [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md).
- Supplies the old-versus-new cohort evidence behind [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md) and [citation tail maturation bias](../validations/citation_tail_maturation_bias.md).
- Shows why [citation data census dates](../methods/citation_data_census_dates.md) must be recorded for citation-count panels.
- Complements [Physical Review citation network](physical_review_citation_network.md), which is a directed internal citation graph rather than Redner's PRD citation-count distribution panel.
- Provides annual moment rows for [citation higher-moment outlier leverage](../validations/citation_higher_moment_outlier_leverage.md).

## Operationalization

- Select Physical Review D papers from the specified volumes or publication years.
- Count received citations as of a stated citation-data census date.
- Preserve annual publication cohorts so mean, higher moments, and top-cited paper counts can be compared by year.
- Split older and newer cohorts to test lower-tail stability and high-tail maturation.
- Report whether uncited papers are included; Redner's PRD panel focuses on papers cited at least once.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) analyzes 24,296 Physical Review D papers from volumes 11 through 50, published from 1975 through 1994.
- Redner reports 351,872 citations to those papers as of June 1997.
- The paper compares the complete PRD panel with the first four years and last four years of the panel, showing that recent highly cited papers had less time to accumulate citations.
- Redner's annual table reports article counts, mean citations, second and third moment roots, and the most-cited paper for each year.

## Caveats

- The panel is journal-bounded and should not be generalized to all physics without comparison data.
- Redner reports the PRD distribution for papers cited at least once, so uncited-paper treatment differs from the ISI cohort.
- Citation counts were still evolving as of June 1997, especially in the high-citation tail.
- Journal scope, review articles, and field-specific citation practices can shape the observed distribution.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md)
- [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)
- [citation higher-moment outlier leverage](../validations/citation_higher_moment_outlier_leverage.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [Physical Review citation network](physical_review_citation_network.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `physical_review_d_citation_distribution_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: PRD citation distribution panel; Physical Review D citation-count panel; Redner PRD citation panel; PRD annual citation moments
