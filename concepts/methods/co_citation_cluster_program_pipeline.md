# Co-citation cluster-program pipeline

## Summary

Turns manual co-citation counting into an automated pipeline that computes co-citation data and feeds them into clustering software.

## Canonical Form

- Unit of analysis: citation-index extraction and clustering workflow.
- Typical representation: pipeline from cited-reference resolution to matrix construction, thresholding, clustering, and map export.
- Method target: reproducible co-citation cluster generation.
- Empirical signature: automatic co-citation counts can be clustered into specialty maps.

## Uses in Science of Science

- Connects [citation-index co-citation intersection](citation_index_co_citation_intersection.md) to [specialty co-citation mapping](specialty_co_citation_mapping.md).
- Useful for documenting modern co-citation map workflows that descend from manual examples.
- Links co-citation strengths and thresholded networks into one reproducible process.

## Operationalization

- Define source snapshot, cited-reference resolution, pairwise co-citation matrix construction, thresholding, clustering, layout, and export steps.
- Record software versions and parameter choices for clustering and map generation.
- Validate intermediate counts against small hand-checkable examples.

## Evidence and Validations

- Verified full-text evidence from Small (1973) notes that programs were being developed to automatically determine co-citation and use those data as cluster-program input.
- The note marks the transition from manual demonstration to automated pipeline.

## Caveats

- The evidence is prospective rather than a full implemented method in the paper.
- Pipeline choices can dominate the final map even when raw counts are correct.

## Links

- [Citation-index co-citation intersection](citation_index_co_citation_intersection.md)
- [Co-citation strength](../measures/co_citation_strength.md)
- [Thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [Specialty co-citation mapping](specialty_co_citation_mapping.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_cluster_program_pipeline`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: automated co-citation clustering pipeline; co-citation cluster workflow; citation-index clustering pipeline
