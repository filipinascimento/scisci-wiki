# Focal-predecessor-future citation triads

## Summary

Focal-predecessor-future citation triads represent a focal paper or patent, the predecessors it cites, and later works that cite the focal item, its predecessors, or both.

## Canonical Form

- Unit of analysis: focal paper, focal patent, cited predecessor set, future citing work, citation window, or citation ego network.
- Typical representation: tripartite directed graph with focal, predecessor, and future-citing node types.
- Representation target: whether later attention moves toward the focal work and away from its predecessors, or reinforces the predecessor stream.
- Empirical signature: future works split into focal-only, predecessor-only, and focal-plus-predecessor citation categories.

## Uses in Science of Science

- Provides the representation underneath [disruption index](../measures/disruption_index.md), [CD-index time windows](../measures/cd_index_time_windows.md), and [modified CD index](../measures/modified_cd_index.md).
- Links paper-level [citation networks](citation_networks.md) and patent citation networks through the same focal-predecessor-future structure.
- Makes [disruption and consolidation](../mechanisms/disruption_consolidation.md) operational as a change in downstream citation attention.

## Operationalization

- Choose a focal paper or patent and record the predecessors it cites at publication or issue time.
- Within a fixed later window, identify all works that cite the focal work, any predecessor, or both.
- Classify future works into focal-only, predecessor-only, and focal-plus-predecessor categories.
- Convert the triad counts into CD-index variants or inspect the triad visually for case-study interpretation.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) defines a tripartite graph with a focal patent, predecessor inventions, and future patents that cite the focal patent and/or its predecessors.
- The paper states that future patents can join the network in three ways: citing predecessors only, citing the focal patent only, or citing both the focal patent and its predecessors.
- Funk and Owen-Smith use this representation to distinguish destabilizing inventions, which direct attention away from predecessors, from consolidating inventions, which deepen later use of predecessor streams.
- Verified full-text evidence from Park, Leahey, and Funk (2023) applies the same focal-predecessor logic to both papers and patents at scale.

## Caveats

- The representation depends on complete reference and forward-citation coverage.
- Citation triads capture attention structure, not all intellectual influence or practical use.
- Future works that omit obvious predecessors can inflate apparent disruption if citation norms differ by field or period.

## Links

- [disruption index](../measures/disruption_index.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [modified CD index](../measures/modified_cd_index.md)
- [disruption and consolidation](../mechanisms/disruption_consolidation.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [citation networks](citation_networks.md)
- [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)
- [patent-paper boundary](patent_paper_boundary.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `focal_predecessor_future_citation_triads`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: CD triads; focal-reference-future triads; predecessor citation triads; disruption ego network
