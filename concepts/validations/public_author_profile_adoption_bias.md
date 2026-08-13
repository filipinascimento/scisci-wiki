# Public author-profile adoption bias

## Summary

Voluntary public author profiles create missingness and selection bias when treated as an author universe or ranking input.

## Canonical Form

- Unit of analysis: public author profile, author universe, platform, or ranking denominator.
- Typical representation: profile adoption rate by field, career stage, country, institution, or citation stratum.
- Validation target: platform-adoption bias in author-level bibliometric comparisons.
- Empirical signature: authors without public profiles differ systematically from profile adopters.

## Uses in Science of Science

- Places [Google Scholar](../datasets/google_scholar.md) profile data inside a coverage-bias audit.
- Useful before comparing public-profile rankings with source-derived author databases.
- Connects voluntary profile adoption to [sufficient author ranking depth](../methods/sufficient_author_ranking_depth.md).

## Operationalization

- Estimate profile adoption by field, country, seniority, institution, gender proxy, and citation rank.
- Compare platform-derived rankings against standardized author universes with known denominators.
- Treat absence of a public profile as missingness, not as absence of scholarship.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) notes that Google Scholar allows researchers to create public profiles but not all researchers have done so.
- That voluntary adoption makes public profiles unsuitable as an unqualified population frame.

## Caveats

- Some fields may use public profiles strategically while others rely on institutional or database profiles.
- Adoption bias can change over time as platform norms spread.

## Links

- [Google Scholar](../datasets/google_scholar.md)
- [Google Scholar transparency limitations](google_scholar_transparency_limitations.md)
- [Sufficient author ranking depth](../methods/sufficient_author_ranking_depth.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Standardized author citation database](../datasets/standardized_author_citation_database.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `public_author_profile_adoption_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: public profile selection bias; Google Scholar profile adoption bias; voluntary author profile missingness
