# Relative co-citation frequency

## Summary

Relative co-citation frequency normalizes a pair's co-citation count by the size of the combined citing-document set, turning raw overlap into a proportional association measure.

## Canonical Form

- Unit of analysis: pair of cited documents, references, authors, journals, or concepts.
- Typical representation: ratio of shared citing documents to all documents that cite either member of the pair.
- Mechanism or measurement target: normalized strength of later joint use after accounting for the citing sets' combined size.
- Empirical signature: two cited entities have a high overlap share among the documents citing at least one of them.

## Uses in Science of Science

- Complements raw [co-citation strength](co_citation_strength.md) when pairs differ in individual citation volume.
- Provides a compact normalized edge weight for [co-citation](../representations/co_citation.md) networks and [thresholded co-citation networks](../representations/thresholded_co_citation_network.md).
- Helps compare co-citation pairs across specialties, time slices, and database snapshots.
- Can be contrasted with cosine, association strength, and probabilistic null-model weights in science maps.
- Makes the denominator choice explicit for responsible use of co-citation indicators.

## Operationalization

- Use [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md) to obtain citing-document sets `A` and `B`.
- Compute the raw overlap `n(A intersection B)`.
- Compute the union denominator `n(A union B)`.
- Calculate relative co-citation frequency as `n(A intersection B) / n(A union B)`.
- Report the source database, snapshot date, entity-resolution rules, and any minimum-denominator threshold.

## Evidence and Validations

- Verified full-text evidence from Small (1973) gives a formal set-theory definition of co-citation frequency using the overlap between two citing-document sets.
- The same note proposes relative co-citation frequency as the overlap count divided by the size of the union of the two citing-document sets.
- This makes relative co-citation frequency an early normalized alternative to the raw count later used as [co-citation strength](co_citation_strength.md).

## Caveats

- The ratio can be unstable for pairs with very small union sizes.
- Very broad method or review papers may receive low relative scores despite large raw co-citation counts.
- Union normalization controls some popularity differences but does not by itself field-normalize for citation cultures, reference-list lengths, or paper age.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](co_citation_strength.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [journal-pair z-score](journal_pair_z_score.md)
- [normalized publication relatedness](normalized_publication_relatedness.md)
- [responsible metrics](responsible_metrics.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `relative_co_citation_frequency`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: normalized co-citation frequency; co-citation overlap ratio; co-citation Jaccard ratio; union-normalized co-citation
