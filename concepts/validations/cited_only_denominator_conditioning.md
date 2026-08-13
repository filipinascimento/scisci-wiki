# Cited-only denominator conditioning

## Summary

Cited-only denominator conditioning is the caveat that citation panels retaining only papers cited at least once cannot directly estimate uncited mass or lower-tail shares.

## Canonical Form

- Unit of analysis: citation-distribution dataset, cited-paper panel, uncited paper denominator, or lower-tail estimate.
- Typical representation: inclusion rule, cited-only denominator flag, and missing-zero caveat.
- Validation target: whether distributional claims include the zero-citation and low-citation mass.
- Empirical signature: the dataset excludes uncited papers by construction and must not be used to infer uncitedness without an external denominator.

## Uses in Science of Science

- Adds a denominator caveat to [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md).
- Contrasts with [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md), which includes uncited papers.
- Supports [uncited-paper mass](../measures/uncited_paper_mass.md) and [uncited-paper inclusion sensitivity](uncited_paper_inclusion_sensitivity.md).
- Provides a reusable validation for [citation distribution scaling](../measures/citation_distribution_scaling.md).

## Operationalization

- Record whether a citation dataset includes uncited papers.
- Report the total publication denominator separately from the cited-paper denominator.
- Avoid comparing lower-tail shares across cited-only and all-paper panels without adjustment.
- Use external publication counts when reconstructing uncited mass from cited-only datasets.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) describes a Physical Review D panel of papers cited at least once.
- Redner separately reports that the ISI cohort includes a large uncited-paper mass.
- The contrast shows why cited-only panels cannot by themselves support claims about uncited shares or full lower-tail structure.

## Caveats

- Cited-only panels can still support upper-tail and positive-citation distribution analysis.
- External denominators may have their own document-type and coverage differences.
- Uncitedness depends strongly on citation window and database coverage.

## Links

- [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md)
- [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [uncited-paper inclusion sensitivity](uncited_paper_inclusion_sensitivity.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `cited_only_denominator_conditioning`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: cited-only denominator; positive-citation conditioning; cited-paper-only panel caveat; missing uncited denominator
