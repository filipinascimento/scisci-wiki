# Own-work reliance disruption penalty

## Summary

Own-work reliance disruption penalty is the mechanism that greater reliance on one's prior work reflects familiar knowledge search and is associated with less disruptive papers or patents.

## Canonical Form

- Unit of analysis: paper, patent, author team, inventor team, self-citation share, reference list, or disruption score.
- Typical representation: self-citation ratio, own-work citation count, familiarity proxy, or regression coefficient on disruption.
- Mechanism: repeated use of one's prior work narrows the knowledge base and continues existing research streams instead of redirecting attention to new trajectories.
- Empirical signature: higher self-citation or own-work reliance predicts lower disruption after accounting for other practice and team controls.

## Uses in Science of Science

- Refines [knowledge-use narrowing](knowledge_use_narrowing.md) with a specific familiarity channel.
- Links [self-citation rates](../measures/self_citation_rates.md) to [disruptiveness decline over time](disruptiveness_decline.md).
- Complements [cited work diversity](../measures/cited_work_diversity.md) and [reference-age search depth](../measures/reference_age_search_depth.md).
- Helps distinguish strategic self-promotion from repeated local search in disruption analyses.

## Operationalization

- Count citations from a focal paper or patent to works by the same authors or inventors.
- Normalize by total references or total cited work when comparing across fields and years.
- Include author or inventor career-age and prior-output controls to address exposure to self-citable work.
- Estimate association with disruption scores alongside diversity and cited-age measures.
- Compare paper and patent results when parallel data are available.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) identifies increasing self-citation as a proxy for continuing one's existing research stream and relying on familiar knowledge.
- The authors report that using less diverse work, more of one's own work, and older work are negatively associated with disruption.
- Their regression discussion states that the ratio of self-citations to total cited work is negative and significant for both papers and patents, and that disruption decreases when researchers or inventors rely more on their own work.

## Caveats

- Self-citation can reflect legitimate cumulative expertise, data reuse, or method continuity.
- Authors with longer careers have more prior work available to cite, so career-age and prior-output controls matter.
- Own-work reliance is a proxy for familiarity, not direct observation of search behavior.

## Links

- [knowledge-use narrowing](knowledge_use_narrowing.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [cited work diversity](../measures/cited_work_diversity.md)
- [disruptiveness decline over time](disruptiveness_decline.md)
- [cited-age dispersion interaction](../measures/cited_age_dispersion_interaction.md)
- [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395; WoS: unknown]

## Metadata

- Concept ID: `own_work_reliance_disruption_penalty`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: self-citation disruption penalty; own-prior-work familiarity channel; self-reliance narrowing mechanism; own-work CD penalty
