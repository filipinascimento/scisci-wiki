# h-index stretched-exponential curve model

## Summary

The h-index stretched-exponential curve model fits an author's rank-ordered citation profile with a parametric curve conditioned on h-index structure.

## Canonical Form

- Unit of analysis: author, ranked publication, citation count, h-core, or citation profile.
- Typical method: fit a stretched-exponential or similar parametric curve to rank-citation data.
- Method target: summarize the full citation profile around the h boundary.
- Empirical signature: fitted curve shape captures how quickly citations drop from top papers to lower-ranked papers.

## Uses in Science of Science

- Extends [h-index citation-curve intersection](../representations/h_index_citation_curve_intersection.md).
- Refines [h-index total-citation scaling](../measures/h_index_total_citation_scaling.md).
- Helps interpret [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md).
- Provides a bridge from scalar h to rank-citation profile analysis.

## Operationalization

- Sort an author's papers by descending citation count.
- Fit a parametric curve to citation count as a function of rank.
- Examine the h boundary and the curve tail.
- Compare fitted parameters across authors or fields cautiously.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) discusses rank-citation curves and uses a stretched-exponential form to describe citation profiles.
- The paper uses these curves to reason about the relationship among h, total citations, and citation concentration.
- This makes the curve model a distinct method from simply computing h.

## Caveats

- Parametric curve fit can be unstable for short publication lists.
- Citation profiles differ by field, career age, database, and publication type.
- A good curve fit does not validate h-index use in assessment.

## Links

- [h-index](../measures/h_index.md)
- [h-index citation-curve intersection](../representations/h_index_citation_curve_intersection.md)
- [h-index total-citation scaling](../measures/h_index_total_citation_scaling.md)
- [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md)
- [author rank-citation profile](../measures/author_rank_citation_profile.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; SciSciNet: W2128438887; WoS: unknown]

## Metadata

- Concept ID: `h_index_stretched_exponential_curve_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index rank-citation curve model; stretched-exponential citation profile; h-conditioned citation curve
