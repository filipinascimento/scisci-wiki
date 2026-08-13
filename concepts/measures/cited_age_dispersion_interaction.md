# Cited-age dispersion interaction

## Summary

Cited-age dispersion interaction models disruption as a function of both the mean age and the spread of ages among cited works.

## Canonical Form

- Unit of analysis: paper, patent, reference list, cited-work age distribution, or disruption model.
- Typical measure: interaction between mean cited-work age and dispersion in cited-work age.
- Measurement target: whether older references are associated with disruption differently when reference ages are narrow or broad.
- Empirical signature: the relationship between mean reference age and disruption changes with the dispersion of reference ages.

## Uses in Science of Science

- Refines [reference-age search depth](reference_age_search_depth.md).
- Adds structure to [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Supports regression analysis of [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Complements [cited work diversity](cited_work_diversity.md).

## Operationalization

- Compute the age of each cited work at the focal publication or patent date.
- Estimate the mean and dispersion of cited-work ages.
- Include both terms and their interaction in a disruption model.
- Interpret reference age conditional on how broad or narrow the cited-age distribution is.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) models disruption using the interaction between mean age of cited work and dispersion in age of cited work.
- The paper reports a positive and significant interaction for papers and patents.
- This supports treating reference-age search as a distributional measure rather than only a mean age.

## Caveats

- Cited-age dispersion depends on database coverage and reference matching.
- Broad age dispersion can mean synthesis, background padding, or diverse knowledge search.
- The measure should be interpreted with reference-list length and unlinked-reference controls.

## Links

- [reference-age search depth](reference_age_search_depth.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [cited work diversity](cited_work_diversity.md)
- [unlinked reference coverage control](../validations/unlinked_reference_coverage_control.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395; WoS: unknown]

## Metadata

- Concept ID: `cited_age_dispersion_interaction`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: cited-work age interaction; reference age dispersion interaction; mean-age spread disruption measure
